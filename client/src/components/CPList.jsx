import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CPList = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/api/CP');
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* <h2 className="text-2xl font-bold mb-6">Community Partners List</h2> */}
      {sponsors.length === 0 ? (
        <div>No sponsors found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {sponsors.map((sponsor) => (
            <div key={sponsor._id} className="p-4 border bg-blue-950 text-white rounded-md shadow-sm">
              <h3 className="text-xl font-bold text-center">{sponsor.companyName}</h3>
              <p className="text-white"><span className='font-semibold'>Size of the Community:</span> {sponsor.size}</p>
              <p className="text-white"><span className='font-semibold'>Deliveries Expected:</span> {sponsor.deliveries}</p>
              <p className="text-white"><span className='font-semibold'>LinkedIn:</span> <a href={sponsor.linkedIn} target="_blank" rel="noopener noreferrer">{sponsor.linkedIn}</a></p>
              <p className="text-white"><span className='font-semibold'>Instagram:</span> <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer">{sponsor.instagram}</a></p>
              <p className="text-white"><span className='font-semibold'>Contact Name:</span> {sponsor.contactName}</p>
              <p className="text-white"><span className='font-semibold'>Phone Number:</span> {sponsor.phoneNumber}</p>
                <div className="mt-4">
                  <img src={sponsor.imageUrl} alt="Company Logo" className="w-full h-auto rounded-md" loading='lazy' width={375} height={375} />
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CPList;