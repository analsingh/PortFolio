import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const links = [{
    id: 1,
    child: (
        <>
            LinkedIn < FaLinkedin size={30} />
        </>
    ),
    href: "https://www.linkedin.com/in/anal-singh/",

},
{
    id: 2,
    child: (
        <>
            GitHub < FaGithub size={30} />
        </>
    ),
    href: "https://github.com/analsingh",
},
{
    id: 3,
    child: (
        <>
            Mail < HiOutlineMail size={30} />
        </>
    ),
    href: "mailto:analsingh5833@gmail.com",
},
{
    id: 4,
    child: (
        <>
            Resume < BsFillPersonLinesFill size={30} />
        </>
    ),
    href: "./AnalSingh_resume.pdf",

},



]
export default links;