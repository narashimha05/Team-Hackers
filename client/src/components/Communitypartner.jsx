import React from 'react'
import { Link } from 'react-router-dom'
import CPList from './CPList'
export const Communitypartner = () => {
  return (
    <div>
      <div className='md:mx-0 mx-5'>
        <div className='text-blue-950 md:text-2xl ml-5 md:ml-12  flex flex-row items-center justify-between pb-4'>
      <div className='font-bold'>List of Community Partners: </div>
      <div className='md:mr-12'>
        <button className='border-2 rounded-md bg-blue-950 text-white border-blue-950 md:text-xl md:p-4 text-xs'><Link to={'/registerCP'}>Register for Community Partner +</Link></button>
      </div>
    </div>
    </div>
    <div>
      <CPList/>
    </div>
    </div>
  )
}