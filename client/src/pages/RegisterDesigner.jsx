import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterDesigner = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [charge, setCharge] = useState('');
    const [ProjectLink, setProjectLink] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                name,
                email,
                experience,
                skills,
                charge,
                ProjectLink
            };

            const response = await axios.post('https://hackers-sndc.onrender.com/v1/api/register-designer', formData);
            console.log('Designer registered successfully:', response.data);
            navigate('/mainpage');
        } catch (error) {
            console.error('Error registering designer:', error);
        }
    }

  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-md p-6'>
        <h2 className="text-2xl font-bold mb-6">Register Designer</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full mt-2 p-2 border rounded" 
            required 
          />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full mt-2 p-2 border rounded" 
                required 
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Experience</label>
            <input 
                type="text" 
                value={experience} 
                onChange={(e) => setExperience(e.target.value)} 
                className="w-full mt-2 p-2 border rounded" 
                required 
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <input 
                type="text" 
                value={skills} 
                onChange={(e) => setSkills(e.target.value)} 
                className="w-full mt-2 p-2 border rounded" 
                required 
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Charge</label>
            <input 
                type="number" 
                value={charge} 
                onChange={(e) => setCharge(e.target.value)} 
                className="w-full mt-2 p-2 border rounded" 
                required 
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Project Link</label>
            <input 
                type="url" 
                value={ProjectLink} 
                onChange={(e) => setProjectLink(e.target.value)} 
                className="w-full mt-2 p-2 border rounded" 
            />
        </div>

        <div className="mt-6">
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">Register Designer</button>
        </div>
        </form>
    </div>
  )
}

export default RegisterDesigner