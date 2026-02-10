import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Reviews = () => {
    const {ref, inView} = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })

    return (
        <div className='max-w-5xl mx-auto' ref={ref}>
            <h2 className='text-3xl font-semibold'>We Provide Best Medical Services</h2>
            <p className='text-xl my-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='my-6 mx-1 grid grid-cols-2 justify-items-center md:grid-cols-4 gap-3'>
                <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-doctor.png" alt="" />
                    <h4 className='text-3xl font-semibold my-2'>{inView && <CountUp start={2} end={199} duration={2}></CountUp>}+</h4>
                    <p>Total Doctors</p>
                </div>
                <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-review.png" alt="" />
                    <h4 className='text-3xl font-semibold my-2'>{inView && <CountUp start={1} end={467} duration={2}></CountUp>}+</h4>
                    <p>Total Reviews</p>
                </div>
                <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-Patients.png" alt="" />
                    <h4 className='text-3xl font-semibold my-2'>{inView && <CountUp start={1} end={1900} duration={3}></CountUp>}+</h4>
                    <p>Patients</p>
                </div>
                <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-sm'>
                    <img className='w-20' src="/src/assets/success-staffs.png" alt="" />
                    <h4 className='text-3xl font-semibold my-2'>{inView && <CountUp start={1} end={300} duration={2}></CountUp>}+</h4>
                    <p>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;