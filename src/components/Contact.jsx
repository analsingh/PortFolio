import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit the form to get in touch with me.
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/4df30425-b10a-4aa4-868c-93fa6b0fe414'
                        method='POST'
                        className='flex flex-col w-full md:w-1/2'>

                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter your name'
                            className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='Enter your E-mail'
                            className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />

                        <textarea
                            id='message'
                            name='message'
                            rows='6'
                            placeholder='Enter your message'
                            className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>
                        <button className='text-white bg-gradient-to-b from-red-500 to-amber-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
