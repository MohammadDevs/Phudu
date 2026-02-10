import React, { useState } from 'react';

const Hero = ({handleSearch}) => {
    const [searchText, setSearchText] = useState('')
    
    return (
        <div className='lg:w-6xl mx-auto py-12 border-2 border-white rounded-2xl bg-linear-to-b from-red-50 to-white'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl font-semibold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='text-gray-800'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
{/* Search field */}
                    <form onSubmit={(e)=> handleSearch(e, searchText)} action="" className='md:flex gap-10 items-center justify-center my-4'>
                        <input
                        value={searchText}
                        onChange={e=> setSearchText(e.target.value)}
                            type='text'
                            placeholder='Search any doctor...' 
                            className='bg-white border border-gray-300 rounded-3xl drop-shadow-sm p-2 text-sm' size={50} 
                            />
                            <button
                            type='submit'
                            className='btn bg-[#176AE5] text-white rounded-3xl text-sm px-4 py-5 mt-4 md:mt-0 drop-shadow-sm'>Search Now</button>
                    </form>
{/* hero images */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-5'>
                    <img className='w-96' src="https://i.ibb.co.com/Vk1z975/banner-img-1.png" alt="" />
                    <img className='w-96 rounded-2xl' src="https://i.ibb.co.com/x8hyP1v5/hero2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;