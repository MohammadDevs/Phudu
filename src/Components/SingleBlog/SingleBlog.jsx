import React from 'react';

const SingleBlog = ({data}) => {
    return (
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">{data.question}</div>
                        
                    <div className="collapse-content text-sm">
                        <p className='text-blue-600 font-thin'>Answer:</p>    
                        {data.answer}
                    </div>
        </div>
    );
};

export default SingleBlog;