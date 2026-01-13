import { useLoaderData } from 'react-router';
import Hero from '../../Components/Banner/Hero';
import Doctors from '../../Components/Doctors/Doctors';

const Home = () => {
    const data = useLoaderData() 
    return (
        <div className='text-center'>
            <Hero></Hero>
            <Doctors doctorsData ={data}></Doctors>
        </div>
    );
};

export default Home;