import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import myImage from "../assets/anl.png";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white
         bg-black fixed z-50'>
            <div className="logo" style={{ marginLeft: '-15px' }}>
                <img
                    src={myImage}
                    alt="ANL Logo"
                    className="object-cover h-48 w-auto hover:scale-105 transform transition duration-300 ease-in-out"
                />
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize text-xl text-gray-500 hover:scale-105 duration-200">
                        <Link
                            activeClass="active"
                            to={link.toLowerCase()} // Assuming your section IDs are lowercase
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this offset if needed to accommodate your fixed navbar
                            duration={500}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 
            z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize text-4xl py-6">
                            <Link
                                activeClass="active"
                                to={link.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setNav(false)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
