import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addBookList } from '../Utils';
import { ToastContainer } from 'react-toastify';

const DoctorsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    // console.log(data)
    const singleDoctors = data.find(doctor => doctor.id === parseInt(id))
    const {name,image,degree, workplace,regNo, 
availability, consultationFee} = singleDoctors || {}
const handleAddBookList =()=>{
    addBookList(singleDoctors)
}
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex flex-col gap-4 items-center p-6 text-center bg-white rounded-xl'>
                <h3 className='text-2xl font-semibold'>Doctor’s Profile Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis <br /> turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
    {/* Doctors Details */}
            <div className='md:flex gap-5 p-7 bg-white rounded-xl my-6 items-center'>
                <div><img className='md:max-w-96 md:max-h-96 rounded-xl' src={image} alt="Doctors Photo" /></div>
            
                <div>
                    <h3 className='text-2xl font-semibold mt-6 md:mt-0'>{name}</h3>
                    <p className='text-gray-500 my-4'>{degree}</p>
                    <p className='text-gray-500 my-2'>Working at</p>
                    <p>{workplace}</p>
                    <p>® {regNo}</p>
                    <div className='md:flex items-center gap-2'>
                        <p className='font-semibold text-center md:text-left'>Availability:</p>
                        {availability.map((single,index)=> <button key={index} className='btn rounded-3xl bg-amber-50 text-amber-300 m-1'>{single}</button>)}
                    </div>
                    <div className='my-2'>
                        <span className='font-semibold'>Consultation Fee:  </span>
                        <span className='text-blue-600'>Taka: {consultationFee} </span>
                        <span className='text-gray-500'>(incl. Vat) </span>
                        <span className='text-blue-500'>Per consultation</span> 
                    </div>
                </div>
            </div>
    {/* Bookings section here with  a booking button */}
            <div className='bg-white p-6 rounded-2xl text-center'>
                <h1 className='text-2xl font-semibold mb-4'>Book an Appointment</h1>
                <div className='md:flex justify-between p-4 items-center border-t-2 border-dashed border-gray-200 border-b-2'>
                    <p className='text-xl font-semibold'>Availability</p>
                    <p className='bg-green-100 px-4 py-1 rounded-2xl font-medium'>{availability ? "Doctor Available Today" : "Doctor Not Available Today"}</p>
                </div>
                <p className='text-amber-400 bg-amber-100 py-1 font-thin rounded-2xl my-4'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                    <button onClick={handleAddBookList} className='btn bg-blue-600 text-white rounded-3xl hover:bg-blue-500 px-14 md:px-36'>Book Appointment Now</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default DoctorsDetails;