import React from 'react';
import { useText } from '../context/TextContext';

const EditFrame = () => {
  const { isAdmin } = useText();
  
  if (!isAdmin) return null;
  
  return (
    <div className="global-edit-frame"></div>
  );
};

export default EditFrame;
