import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-lg md:text-xl mt-8 md:mt-10 text-center'>
                    Hello, I'm Anal Singh, a passionate and driven individual with a deep
                    interest in technology and its transformative potential. Currently pursuing
                    a degree in Information Technology, I have honed my skills in areas such as
                    operating systems, database management, and programming languages like C++.
                    My academic journey has been complemented by active involvement
                    in extracurricular activities, including leadership roles in organizing
                    technical events.
                </p>
                <br />
                <p className='text-lg md:text-xl text-center'>
                    I strongly believe in the power of teamwork and effective communication to drive success.
                    Committed to continuous learning in the evolving tech landscape.
                </p>
            </div>
        </div>
    )
}




export default About