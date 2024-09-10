import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterCP = () => {
  const [companyName, setCompanyName] = useState('');
  const [size, setSize] = useState('');
  const [deliveries, setDeliveries] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');
  const [contactName, setContactName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  // Handler for file input change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected image file in state
  };

  // Function to upload image to Cloudinary
  const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'gagandemoapp'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dlp0vynmo/image/upload', formData);
      return response.data.secure_url; // Return the Cloudinary image URL
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  // Submit form data to server
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = '';
      if (image) {
        // Upload image to Cloudinary and get the URL
        imageUrl = await uploadImageToCloudinary(image);
      }

      // Prepare form data with the Cloudinary image URL
      const formData = {
        companyName,
        size,
        deliveries,
        linkedIn,
        instagram,
        contactName,
        phoneNumber,
        imageUrl, // Include the Cloudinary image URL
      };

      // Send form data to your backend
      const response = await axios.post('https://hackers-sndc.onrender.com/v1/api/register-cp', formData);
      console.log('Community Partner registered successfully:', response.data);
      navigate('/mainpage');
      // Optionally, clear the form or redirect after successful submission
    } catch (error) {
      console.error('There was an error registering the Community Partner:', error.response || error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-6">Register For Community Partner</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input 
            type="text" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Total Size of Your Community</label>
          <input 
            type="number" 
            value={size} 
            onChange={(e) => setSize(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Deliveries Expected</label>
          <textarea 
            value={deliveries} 
            onChange={(e) => setDeliveries(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            rows="4" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn</label>
          <input 
            type="url" 
            value={linkedIn} 
            onChange={(e) => setLinkedIn(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Instagram</label>
          <input 
            type="url" 
            value={instagram} 
            onChange={(e) => setInstagram(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Person to Contact Name</label>
          <input 
            type="text" 
            value={contactName} 
            onChange={(e) => setContactName(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Company Logo</label>
          <input 
            type="file" 
            onChange={handleImageChange} 
            className="w-full mt-2 p-2 border rounded" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Register Community Partner
        </button>
      </form>
    </div>
  );
};

export default RegisterCP;
