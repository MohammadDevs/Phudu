import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Bookings = () => {
    const doctorData = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    const visibleDoctors = showAll
        ? doctorData
        : doctorData.slice(0, 6);

    return (
        <div>
            <p>This is Bookings</p>

            {visibleDoctors.map(data => (
                <p key={data.id}>{data.name}</p>
            ))}

            <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 btn text-white rounded-3xl"
            >
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default Bookings;
