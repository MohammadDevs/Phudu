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
                allData.map(data=><div key={data.id} data={data}>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">{data.question}</div>
                        
                    <div className="collapse-content text-sm">
                        <p className='text-blue-600 font-thin'>Answer:</p>    
                        {data.answer}
                    </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blogs;