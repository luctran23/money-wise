import React, { useState } from 'react';
import { storage } from '../../firebase'; // Adjust the path as needed
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import ProgressBar from './ProgressBar';

type ImageUploadProps = {
  imageUrl: string;
  setImageUrl: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ imageUrl, setImageUrl }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  // const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!selectedImage) return;

    const imageRef = ref(storage, `images/${selectedImage.name}`);
    const uploadTask = uploadBytesResumable(imageRef, selectedImage);

    // Monitor the upload progress
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(url);
        console.log('Upload successful:', url);
      }
    );
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e: any) => setSelectedImage(e.target.files[0])} 
      />
      {selectedImage && (
        <img 
          src={URL.createObjectURL(selectedImage)} 
          alt="Selected" 
          style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }} 
        />
      )}
      <button onClick={handleUpload}>Upload Image</button>
      <ProgressBar progress={progress} />
      {imageUrl && (
        <div>
          <h4>Image URL:</h4>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;