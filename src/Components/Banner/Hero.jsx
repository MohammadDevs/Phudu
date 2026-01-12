import React from 'react';

const Hero = () => {
    return (
        <div className='lg:w-6xl mx-auto py-12 border-2 border-white rounded-2xl bg-linear-to-b from-red-50 to-white'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl font-semibold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='text-gray-800'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className='md:flex gap-10 items-center justify-center my-4'>
                    <form action="">
                        <input className='bg-white border border-gray-300 rounded-3xl drop-shadow-sm p-2 text-sm' size={50}  type="text" placeholder='Search any doctor...' />
                    </form>
                    <button className='btn bg-[#176AE5] text-white rounded-3xl text-sm px-4 py-5 mt-4 md:mt-0'>Search Now</button>
                </div>
                <div className='flex flex-col md:flex-row gap-4 justify-center mt-5'>
                    <img className='w-96' src="/src/assets/banner-img-1.png" alt="" />
                    <img className='w-96' src="/src/assets/banner-img-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;