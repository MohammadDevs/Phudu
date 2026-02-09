import React from 'react';
import { useLoaderData } from 'react-router';
import { BsCalendarDate } from "react-icons/bs";

const Blogs = () => {
    const allData = useLoaderData()
    console.log(allData)
    return (
        <div>
            <div className='text-center my-5'>
                <h3 className='text-4xl font-medium'>Blogs</h3>
                <p className='text-shadow-gray-600'>Some Important Question And Answer</p>
            </div>
            {
                allData.map(data=><div key={data.id} className='bg-white p-6 m-5 rounded-2xl'>
                    <h4 className='text-xl font-semibold'>{data.question}</h4>
                    <p className='text-blue-600 font-thin'>Answer:</p>
                    <p className='border-b-2 border-red-100 pb-3'>{data.answer}</p>
                    <div className='flex gap-2 mt-4 items-center'>
                        <BsCalendarDate />
                        <p className='text-gray-400'>{data.date}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blogs;