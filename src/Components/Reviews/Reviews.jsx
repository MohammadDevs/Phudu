import React from 'react';

const Reviews = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-3xl font-semibold'>We Provide Best Medical Services</h2>
            <p className='text-xl my-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='my-6 flex flex-4 justify-center gap-5'>
                <div className='w-[210px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-doctor.png" alt="" />
                    <p>Total Doctors</p>
                </div>
                <div className='w-[210px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-review.png" alt="" />
                    <p>Total Doctors</p>
                </div>
                <div className='w-[215px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-Patients.png" alt="" />
                    <p>Total Doctors</p>
                </div>
                <div className='w-[210px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-staffs.png" alt="" />
                    <p>Total Doctors</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;