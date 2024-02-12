import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img from "../assets/me.jpg";
import sign from "../assets/sign.png";
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div name="home" className=" h-screen w-full bg-gradient-to-b
         from-black via-black to-gray-800 home-container ">

            <div className="max-w-screen-lg mx-auto flex flex-col 
            items-center justify-center h-full md:flex-row px-4 md:px-20 " >
                <div className="flex flex-col justify-center h-full ">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white mt-10 ">
                        I'm Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a dynamic individual with a diverse set of interests and talents.
                        Curiosity drives me, and I'm always eager to explore new ideas and learn new skills.
                        Creativity is at the core of who I am, and I love finding innovative
                        solutions to challenges.

                    </p>
                    <div>
                        {/* <button className="group text-white w-fit px-6 py-3 my-2 flex justify-center 
                        items-center capitalize rounded-2xl bg-gradient-to-r
                         from-red-950 to-amber-500 cursor-pointer"> */}
                        <Link
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex justify-center items-center capitalize rounded-2xl bg-gradient-to-r from-red-950 to-amber-500 cursor-pointer"
                        >
                            portfolio <span className="m-1 group-hover:rotate-90 duration-300 ">
                                <MdKeyboardDoubleArrowRight size={20} />
                            </span>
                        </Link>
                        {/* </button> */}
                    </div>
                </div>
                <div className="relative rounded-3xl border-2 border-amber-500 hover:border-red-950 overflow-hidden">
                    <div className="m-1 transition-transform duration-300 transform hover:scale-105 animate-jump-in animate-once animate-duration-1000 animate-delay-[2000] animate-ease-in-out">
                        <img src={img} alt="my img" className=" object-cover h-96 w-auto rounded-2xl md:w-full mr-16 hover:blur-md  " />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <img src={sign} alt=" my signature " className="object-cover h-auto w-auto hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home