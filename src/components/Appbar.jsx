import React from 'react'
import { Link } from 'react-router'
export function Appbar() {
    return (
        <header className='h-14 w-full bg-transparent shadow-lg flex flex-col md:flex-row  justify-center px-6 items-start md:items-center fixed '>
            <Link className='w-[10%]  md:w-[15%] ' > <img src="https://themewagon.github.io/klean/v1.0.2/assets/img/gallery/logo.png" alt="Logo Klean" /></Link>
            <nav className='flex md:justify-between md:items-center w-[100%]  text-[10px] md:text-[17px] md:w-[80%]'>
                <ul className='flex gap-5'>
                    <li className='mt-2'>
                        <Link to={"/"} className='font-semibold hover:underline hover:text-indigo-800'>Home</Link>
                    </li>
                    <li className='mt-2'>
                        <Link to={"/service"} className='font-semibold hover:underline hover:text-indigo-800'>Service</Link>
                    </li>
                    <li className='mt-2'>
                        <div className='font-semibold hover:underline hover:text-indigo-800'>
                            <div className="dropdown inline-block relative">
                                <button className=" font-semibold rounded inline-flex items-center">
                                    <span className="mr-1">Works</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu absolute hidden shadow-md pt-1">
                                    <li className="">
                                        <Link
                                            className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            to={"/projects"}>Projects
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link
                                            className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            to={"/team"}>Team
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mt-2'>
                        <div className='font-semibold hover:underline hover:text-indigo-800'>
                            <div className="dropdown inline-block relative">
                                <button className=" font-semibold rounded inline-flex items-center">
                                    <span className="mr-1">New</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu absolute hidden shadow-md pt-1">
                                    <li className="">
                                        <Link
                                            className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            to={"/details"}>Details
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link
                                            className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            to={"/features"}>Features
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mt-2'>
                        <Link to={"/contact"} className='font-semibold hover:underline hover:text-indigo-800'>Contact</Link>
                    </li>
                </ul>
                <div className='flex gap-2 ms-5'>
                    <Link className='text-blue-700 mt-2'>Log in</Link>
                    <Link className='bg-white rounded-md px-2 md:px-4 py-1 shadow-lg md:mt-2'><button>Sign Up</button></Link>
                </div>
            </nav>
        </header>
    )
}
