import React from 'react';
import Hero from '../../Components/Banner/Hero';
import Doctors from '../../Components/Doctors/Doctors';

const Home = () => {
    return (
        <div className='text-center'>
            <Hero></Hero>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;