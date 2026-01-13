import React from 'react';
import DoctorsCard from '../Doctors Card/DoctorsCard';

const Doctors = ({doctorsData}) => {
console.log(doctorsData)
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold my-6'>Our Best Doctors</h2>
            <p className='m-4 md:mx-0'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    doctorsData.map(doctorData => <DoctorsCard key={doctorData.id} doctorData={doctorData}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;