import { useLoaderData } from 'react-router';
import Hero from '../../Components/Banner/Hero';
import Doctors from '../../Components/Doctors/Doctors';
import Reviews from '../../Components/Reviews/Reviews';
import { useState } from 'react';

const Home = () => {
    // data
    const data = useLoaderData()
    const [doctorsData, setDoctorsData] = useState(data)
    const handleSearch = (e, text) => {
        e.preventDefault()
        if(text === '') return setDoctorsData(data)
    const searchedDoctor = data.filter(doctor => 
        doctor.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        doctor.degree.toLowerCase().split(' ').includes(text.toLowerCase())
    )
    setDoctorsData(searchedDoctor)
        
    }
    return (
        <div className='text-center'>
            <Hero handleSearch={handleSearch}></Hero>
            <Doctors doctorsData ={doctorsData}></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;