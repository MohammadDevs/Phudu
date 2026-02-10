import React from 'react';
import { useLoaderData } from 'react-router';
import SingleBlog from '../../Components/SingleBlog/SingleBlog';

const Blogs = () => {
    const allData = useLoaderData()
    
    return (
        <div>
            <div className='text-center my-5'>
                <h3 className='text-4xl font-medium'>Blogs</h3>
                <p className='text-shadow-gray-600'>Some Important Question And Answer</p>
            </div>
            {
                allData.map(data=><SingleBlog key={data.id} data={data}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;