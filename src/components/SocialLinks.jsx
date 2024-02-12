import React from 'react';
import links from "./links";

const SocialLinks = () => {
    return (
        <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href }) => (
                    <li key={id}
                        className={`flex justify-between items-center w-40 h-14 
                                    px-4 ml-[-100px] bg-gray-500 hover:rounded-lg 
                                    duration-300 hover:ml-[-10px] ${id === 1 ? 'rounded-tr-xl' : ''}
                                    ${id === 4 ? 'rounded-br-xl' : ''}
                                    mb-2  border-2 border-red-950 hover:border-sky-300
                                    `}
                    >

                        <a href={href} className="flex justify-between items-center
                      w-full text-white ">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
