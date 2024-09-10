import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const DesignerList = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchSponsors = async () => {
        try {
          const response = await axios.get('https://team-hackers.onrender.com/v1/api/designer');
          console.log(response.data);
          setSponsors(response.data);
          setLoading(false);
        } catch (error) {
          setError('Error fetching community partners');
          setLoading(false);
        }
      };
  
      fetchSponsors();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  return (
    <div>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        {/* <h2 className="text-2xl font-bold mb-6">Designers List</h2> */}
        {sponsors.length === 0 ? (<div>No sponsors found</div>): 
        (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sponsors.map((sponsor) => (
            <div key={sponsor._id} className="p-4 border bg-blue-950 text-white rounded-md shadow-sm">
                <h3 className="text-xl font-bold"><span className='font-semibold'>Name:</span>{sponsor.name}</h3>
                <p className="text-white"> <span className='font-semibold'>Email:</span>{sponsor.email}</p>
                <p className="text-white"><span className='font-semibold'>Skills:</span> {sponsor.skills}</p>
                <p className="text-white"><span className='font-semibold'>Charge:</span> {sponsor.charge}</p>
                <p className="text-white"> <span className='font-semibold'>Project Link:</span>{sponsor.ProjectLink}</p>
                   </div> 
            ))}
            
            </div>)}
        </div>
    </div>
  )
}

export default DesignerList