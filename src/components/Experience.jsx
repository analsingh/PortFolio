import React from 'react';
import techstack from "./techstack.jsx";

const Experience = () => {
    return (
        <div name="experience" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        TechStack
                    </p>
                    <p className='py-6'>
                        These are the technologies I have worked with.
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-8'> */}
                    {techstack.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
                        >
                            <img
                                src={src}
                                alt={title}
                                className={`mx-auto w-24 ${id === 6 ? 'scale-x-150 scale-y-150' : ''}`}
                            />
                            <p className='mt-4'>
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
