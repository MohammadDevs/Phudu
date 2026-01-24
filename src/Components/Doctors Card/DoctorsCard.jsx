import React from 'react';
import { Link } from 'react-router';

const DoctorsCard = ({doctorData}) => {
    const {id,name,regNo,image,experience,degree,isAvailable} = doctorData;
    return (
        <div className="card bg-base-100 w-80 shadow-sm mx-auto">
  <figure className="px-4 pt-10">
    <img
      src={image}
      alt="Doctors"
      className="rounded-xl h-[270px] w-[280px]" />
  </figure>
  <div className='flex gap-4 mx-auto mt-4'>
    <button className='btn bg-green-50 rounded-3xl text-green-600'>
    {isAvailable}  
    </button>
    <button className='btn bg-blue-50 rounded-3xl text-blue-600'>
      {experience}+ Years Experience
    </button>
  </div>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <h2 className="card-title text-xl font-light text-gray-700 border-b-2 border-gray-300 border-dashed pb-2">{degree} </h2>
    <h2 className='text-gray-500 card-title text-sm font-thin'>® Reg No: {regNo}</h2>
    </div>
    <div className="card-actions mx-auto">
      <Link to={`/doctorsDetails/${id}`}>
          <button className='btn btn-outline btn-info hover:text-white rounded-3xl mb-4 px-16'>View Details</button>
      </Link>
    </div>
  
</div>
    );
};

export default DoctorsCard;