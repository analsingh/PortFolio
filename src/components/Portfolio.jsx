import React from 'react';
import projects from "./portfolio_projects.jsx";

const Portfolio = () => {

    const handleDemo = (demoLink) => {
        window.open(demoLink, "_blank");
    };

    const handleCode = (demoLink) => {
        window.open(demoLink, "_blank");
    };


    return (
        <div name="portfolio" className='w-full bg-gradient-to-b from-black to-gray-800 text-white pb-20'>
            <div className='max-w-screen-lg mx-auto p-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my Projects</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map(({ id, src, codeLink, DemoLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <div className="h-60">
                                <img
                                    src={src}
                                    alt="Project"
                                    className="rounded-md duration-200 hover:scale-105 object-cover h-full w-full"
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button onClick={() => handleDemo(DemoLink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    DEMO
                                </button>
                                <button onClick={() => handleCode(codeLink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    CODE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
