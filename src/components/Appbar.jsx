import React from 'react'
import { Link } from 'react-router'
export function Appbar() {
    return (
        <header className='h-16 bg-cyan-100  flex justify-center px-6 items-center'>
            <Link className='min-w-[15%]' > <img src="" alt="Logo Klean" /></Link>
            <nav className='flex justify-between min-w-[80%]'>
                <ul className='flex gap-4'>
                    <li>
                        <Link to={"/"} className='font-semibold hover:underline hover:text-indigo-800 '>Home</Link>
                    </li>
                    <li>
                        <Link to={"/service"} className='font-semibold hover:underline hover:text-indigo-800'>Service</Link>
                    </li>
                    <li>
                        <div className='font-semibold hover:underline hover:text-indigo-800'>
                            <div className="dropdown inline-block relative">
                                <button className=" font-semibold py-2 px-4 rounded inline-flex items-center">
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
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className='font-semibold hover:underline hover:text-indigo-800'>
                            <div className="dropdown inline-block relative">
                                <button className=" font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">New</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu absolute hidden shadow-md pt-1">
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
                    <li>
                        <Link to={"/contact"} className='font-semibold hover:underline hover:text-indigo-800'>Contact</Link>
                    </li>
                </ul>
                <div className='flex gap-4'>
                    <Link className='text-blue-700'>Log in</Link>
                    <Link className='bg-white rounded-md px-4 py-1 shadow-lg '><button>Sign Up</button></Link>
                </div>
            </nav>
        </header>
    )
}
