// This file provides image upload functionality using ImgBB API
// ImgBB offers free image hosting with no account required

/**
 * Uploads an image to ImgBB and returns the URL
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export const uploadImage = async (imageFile) => {
  try {
    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append('image', imageFile);
    
    // Use the ImgBB API (no API key required for basic uploads)
    const response = await fetch('https://api.imgbb.com/1/upload?key=26a7315d7f5c328f9d7f4ea0e1c3f1d7', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Return the direct image URL
      return data.data.url;
    } else {
      console.error('Error uploading image:', data.error);
      throw new Error(data.error?.message || 'Failed to upload image');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

/**
 * Helper function to convert a data URL to a File object
 * @param {string} dataUrl - The data URL (e.g., from canvas.toDataURL())
 * @param {string} filename - The filename to use
 * @returns {File} - The File object
 */
export const dataURLtoFile = (dataUrl, filename) => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], filename, { type: mime });
};

/**
 * Uploads a base64 image to ImgBB
 * @param {string} base64Image - The base64 image data
 * @param {string} filename - The filename to use
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export const uploadBase64Image = async (base64Image, filename = 'image.png') => {
  try {
    const file = dataURLtoFile(base64Image, filename);
    return await uploadImage(file);
  } catch (error) {
    console.error('Error uploading base64 image:', error);
    throw error;
  }
};
