import React, { useEffect, useState } from 'react';
import DoctorsCard from '../Doctors Card/DoctorsCard';
import { Link } from 'react-router';

const Doctors = ({doctorsData}) => {
const [displayDoctor,setDisplayDoctor] = useState([])
const [showDoctors,setShowDoctors] = useState(false)
useEffect(()=>{
    if(showDoctors){
        setDisplayDoctor(doctorsData)
    }else{
        setDisplayDoctor(doctorsData.slice(0, 6))}
},[doctorsData, showDoctors])

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold my-6'>Our Best Doctors</h2>
            <p className='m-4 md:mx-0'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    displayDoctor.map(doctorData => <DoctorsCard key={doctorData.id} doctorData={doctorData}></DoctorsCard>)
                }
            </div>
            <Link><button onClick={()=>{
                setShowDoctors(prv=>!prv)
                if(showDoctors) window.scrollTo({top: 0,
                                                behavior: 'smooth',
                                                });
            }} className='btn bg-blue-500 text-white rounded-3xl my-5'>{showDoctors ? 'View Less' : 'View All Doctors'}</button> </Link>
        </div>
    );
};

export default Doctors;