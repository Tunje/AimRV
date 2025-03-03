import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db, storage } from '../firebase/config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ResultUploadModal = ({ 
  onClose, 
  onUploadSuccess, 
  years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'], 
  categories = ['Herrar', 'Damer', 'Mixed'], 
  durations = ['3 timmar', '6 timmar', '12 timmar', '24 timmar'], 
  locations = ['Ulricehamn', 'Borås', 'Göteborg', 'Jönköping', 'Stockholm'], 
  isAdmin, 
  year 
}) => {
  const [location, setLocation] = useState('Ulricehamn');
  const [yearState, setYearState] = useState(year || '2023');
  const [category, setCategory] = useState('Herrar');
  const [duration, setDuration] = useState('3 timmar');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { currentUser } = useAuth();

  // Debug logs to check authentication and admin status
  console.log("ResultUploadModal - currentUser:", currentUser);
  console.log("ResultUploadModal - isAdmin prop:", isAdmin);
  console.log("ResultUploadModal - currentUser?.role:", currentUser?.role);

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

    if (!currentUser) {
      console.log("Authentication error: No current user found");
      setError('You must be logged in to upload results');
      return;
    }

    // Check if user is admin
    if (!isAdmin && currentUser?.role !== 'admin') {
      console.log("Authorization error: User is not an admin");
      console.log("isAdmin prop:", isAdmin);
      console.log("currentUser.role:", currentUser?.role);
      setError('You must be an admin to upload results');
      return;
    }

    console.log("Current user:", currentUser);
    console.log("Authentication status:", !!currentUser);
    
    setIsUploading(true);
    setError('');
    
    try {
      // Create a unique file name
      const fileName = `${yearState}_${category}_${duration}_${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `results/${fileName}`);
      
      console.log("Attempting to upload file:", fileName);
      console.log("Storage reference:", storageRef);
      
      // Upload file to Firebase Storage with metadata to avoid CORS issues
      const metadata = {
        contentType: file.type,
        customMetadata: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      };
      
      try {
        await uploadBytes(storageRef, file, metadata);
        console.log("File uploaded successfully");
      } catch (uploadError) {
        console.error("Error in uploadBytes:", uploadError);
        throw uploadError;
      }
      
      // Get the download URL
      let downloadURL;
      try {
        downloadURL = await getDownloadURL(storageRef);
        console.log("Download URL obtained:", downloadURL);
      } catch (urlError) {
        console.error("Error getting download URL:", urlError);
        throw urlError;
      }
      
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
      try {
        await setDoc(docRef, resultData);
        console.log("Result metadata stored successfully");
      } catch (storeError) {
        console.error("Error storing result metadata:", storeError);
        throw storeError;
      }
      
      // Reset form
      setFile(null);
      
      // Notify parent component
      if (onUploadSuccess) {
        onUploadSuccess();
      }
      
      // Close modal
      onClose();
      
    } catch (uploadError) {
      console.error('Error uploading result:', uploadError);
      setError('Failed to upload result. Please try again.');
    } finally {
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
            
            {error && <div className="result-upload-modal-error">{error}</div>}
            
            <div className="result-upload-modal-actions">
              <button 
                type="button" 
                className="result-upload-modal-cancel"
                onClick={onClose}
              >
                Avbryt
              </button>
              <button 
                type="submit" 
                className="result-upload-modal-submit"
                disabled={isUploading}
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