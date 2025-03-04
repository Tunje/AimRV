import React, { useState } from 'react';
import { db, storage } from '../firebase/config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ResultUploadModal = ({ 
  onClose, 
  onUploadSuccess, 
  years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'], 
  categories = ['Herrar', 'Damer', 'Mixed'], 
  durations = ['3 timmar', '6 timmar', '12 timmar', '24 timmar'], 
  locations = ['Ulricehamn', 'Borås', 'Göteborg', 'Jönköping', 'Stockholm'],
  year 
}) => {
  const [location, setLocation] = useState('Ulricehamn');
  const [yearState, setYearState] = useState(year || '2023');
  const [category, setCategory] = useState('Herrar');
  const [duration, setDuration] = useState('3 timmar');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    setIsUploading(true);
    setError('');
    setUploadProgress(0);
    
    try {
      // Create a unique file name
      const fileName = `${yearState}_${category}_${duration}_${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `results/${fileName}`);
      
      // Create file metadata including the content type
      const metadata = { 
        contentType: file.type,
        customMetadata: {
          'year': yearState,
          'category': category,
          'duration': duration,
          'location': location
        }
      };
      
      // Use uploadBytesResumable instead of uploadBytes to track progress
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
      // Listen for state changes, errors, and completion of the upload
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Get upload progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload error:', error);
          setError(`Upload failed: ${error.message}`);
          setIsUploading(false);
        }, 
        async () => {
          // Handle successful uploads on complete
          console.log('Upload completed successfully');
          
          // Get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Download URL:', downloadURL);
          
          // Create result object
          const resultData = {
            year: parseInt(yearState),
            location,
            category,
            duration,
            fileUrl: downloadURL,
            fileName: file.name,
            uploadedAt: new Date().toISOString()
          };
          
          // Store metadata in Firestore
          const docRef = doc(collection(db, 'results'));
          await setDoc(docRef, resultData);
          
          // Reset form
          setFile(null);
          setUploadProgress(0);
          
          // Notify parent component
          if (onUploadSuccess) {
            onUploadSuccess();
          }
          
          // Close modal
          onClose();
          
          setIsUploading(false);
        }
      );
    } catch (error) {
      console.error('Error setting up upload:', error);
      setError(`Upload setup failed: ${error.message}`);
      setIsUploading(false);
    }
  };

  return (
    <div className="result-upload-modal-overlay">
      <div className="result-upload-modal">
        <div className="result-upload-modal-header">
          <h2>Ladda upp resultat</h2>
          <button className="result-upload-modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="result-upload-modal-body">
          <form className="result-upload-modal-form" onSubmit={handleSubmit}>
            <div className="result-upload-modal-field">
              <label>Plats</label>
              <select 
                className="result-upload-modal-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            <div className="result-upload-modal-field">
              <label>År</label>
              <select 
                className="result-upload-modal-select"
                value={yearState}
                onChange={(e) => setYearState(e.target.value)}
              >
                {years.map((y, index) => (
                  <option key={index} value={y}>{y}</option>
                ))}
              </select>
            </div>
            
            <div className="result-upload-modal-field">
              <label>Kategori</label>
              <select 
                className="result-upload-modal-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="result-upload-modal-field">
              <label>Distans</label>
              <select 
                className="result-upload-modal-select"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                {durations.map((dur, index) => (
                  <option key={index} value={dur}>{dur}</option>
                ))}
              </select>
            </div>
            
            <div className="result-upload-modal-field">
              <label>Fil</label>
              <input 
                type="file" 
                className="result-upload-modal-file-input"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"
              />
            </div>
            
            {isUploading && (
              <div className="result-upload-modal-progress">
                <div className="result-upload-modal-progress-bar" style={{ width: `${uploadProgress}%` }}></div>
                <div className="result-upload-modal-progress-text">{Math.round(uploadProgress)}%</div>
              </div>
            )}
            
            {error && <div className="result-upload-modal-error">{error}</div>}
            
            <div className="result-upload-modal-actions">
              <button 
                type="button" 
                className="result-upload-modal-cancel"
                onClick={onClose}
                disabled={isUploading}
              >
                Avbryt
              </button>
              <button 
                type="submit" 
                className="result-upload-modal-submit"
                disabled={isUploading || !file}
              >
                {isUploading ? 'Laddar upp...' : 'Ladda upp'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResultUploadModal;