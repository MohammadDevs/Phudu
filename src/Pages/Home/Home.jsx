import { useLoaderData } from 'react-router';
import Hero from '../../Components/Banner/Hero';
import Doctors from '../../Components/Doctors/Doctors';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
    const data = useLoaderData() 
    return (
        <div className='text-center'>
            <Hero></Hero>
            <Doctors doctorsData ={data}></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;