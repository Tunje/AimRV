import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const ResultUploadModal = ({ 
  onClose, 
  onUploadSuccess, 
  years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'], 
  categories = ['Herrar', 'Damer', 'Mixed'], 
  durations = ['3 timmar', '6 timmar', '12 timmar', '24 timmar'], 
  locations = ['Ulricehamn', 'Borås', 'Göteborg', 'Jönköping', 'Stockholm'],
  year 
}) => {
  const { currentUser } = useAuth();
  const [location, setLocation] = useState('Ulricehamn');
  const [yearState, setYearState] = useState(year || '2023');
  const [category, setCategory] = useState('Herrar');
  const [duration, setDuration] = useState('3 timmar');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    if (!currentUser) {
      setError('You must be logged in to upload results');
      return;
    }
    
    setIsUploading(true);
    setError('');
    setUploadProgress(0);
    
    try {
      const timestamp = Date.now();
      const docId = `${yearState}_${location}_${category}_${timestamp}`;
      
      // Read file as text
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const fileContent = event.target.result;
          
          // Create result document
          const resultData = {
            year: parseInt(yearState),
            location,
            category,
            duration,
            content: fileContent,
            fileName: file.name,
            uploadedAt: new Date().toISOString(),
            uploadedBy: currentUser.uid,
            timestamp
          };
          
          // Save to Firestore
          const resultRef = doc(db, 'results', docId);
          await setDoc(resultRef, resultData);
          
          setFile(null);
          setUploadProgress(100);
          
          setTimeout(() => {
            setIsUploading(false);
            if (onUploadSuccess) {
              onUploadSuccess({ id: docId, ...resultData });
            }
            onClose();
          }, 500);
        } catch (error) {
          console.error('Error saving to Firestore:', error);
          setError(error.message || 'Failed to save result');
          setIsUploading(false);
        }
      };
      
      reader.onerror = () => {
        setError('Failed to read file');
        setIsUploading(false);
      };
      
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          setUploadProgress(progress);
        }
      };
      
      reader.readAsText(file);
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || 'Upload failed');
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
                accept=".txt,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
            
            {error && <div className="result-upload-modal-error">{error}</div>}
            
            {isUploading && (
              <div className="result-upload-modal-progress">
                <div className="result-upload-modal-progress-bar" style={{ width: `${uploadProgress}%` }}></div>
                <div className="result-upload-modal-progress-text">{Math.round(uploadProgress)}%</div>
              </div>
            )}
            
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