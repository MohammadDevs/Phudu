import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    // console.log(data)
    const singleDoctors = data.find(doctor => doctor.id === parseInt(id))
    const {name,image,degree, workplace,regNo, 
availability, consultationFee} = singleDoctors || {};
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex flex-col gap-4 items-center p-6 text-center bg-white rounded-xl'>
                <h3 className='text-2xl font-semibold'>Doctor’s Profile Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis <br /> turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
    {/* Doctors Details */}
            <div className='md:flex gap-5 p-7 bg-white rounded-xl my-6 items-center'>
                <div><img className='max-w-96 max-h-96 rounded-xl' src={image} alt="Doctors Photo" /></div>
            
                <div>
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <p className='text-gray-500 my-4'>{degree}</p>
                    <p className='text-gray-500 my-2'>Working at</p>
                    <p>{workplace}</p>
                    <p>® {regNo}</p>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Availability:</p>
                        {availability.map(single=> <button className='btn rounded-3xl bg-amber-50 text-amber-300 m-1'>{single}</button>)}
                    </div>
                    <div className='my-2'>
                        <span className='font-semibold'>Consultation Fee:  </span>
                        <span className='text-blue-600'>Taka: {consultationFee} </span>
                        <span className='text-gray-500'>(incl. Vat) </span>
                        <span className='text-blue-500'>Per consultation</span> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;