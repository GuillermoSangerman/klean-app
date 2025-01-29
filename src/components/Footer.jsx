import React from 'react'
import { Link } from 'react-router'
export function Footer() {
  return (
    <div className='mt-8'>
      <div className='w-full flex justify-between  bg-[url(./themewagon/themewagon/footer/image1.png)] bg-repeat-round '>
        <div className='w-[100%] flex justify-center gap-15 mb-7'>
          <ul className='flex flex-col'>
            <li className='font-semibold'>About</li>
            <li className='text-slate-400 mt-2'>Price</li>
            <li className='text-slate-400 mt-2'>About</li>
            <Link to={"/service"} className='text-slate-400 mt-2'>Services</Link>
            <li className='text-slate-400 mt-2'>Career</li>
          </ul>

          <ul className=' flex flex-col '>
            <li className='font-semibold'>Resources</li>
            <li className='text-slate-400 mt-2'>Terms</li>
            <li className='text-slate-400 mt-2'>Help</li>
            <li className='text-slate-400 mt-2'>Privacy</li>
          </ul>
          <ul className='flex flex-col'>
            <li className='font-semibold' >Team</li>
            <li className='text-slate-400 mt-2'>Developer</li>
            <li className='text-slate-400 mt-2'>Designer</li>
            <li className='text-slate-400 mt-2'></li>
          </ul>
          <ul className='flex flex-col'>
            <li className='font-semibold' >Blog</li>
            <li className='text-slate-400 mt-2'>CEO</li>
            <li className='text-slate-400 mt-2'>lifestyle</li>
            <li className='text-slate-400 mt-2'>Article</li>
            <li className='text-slate-400 mt-2'>Tech</li>
          </ul>
        </div>
        <div className='w-[100%] flex flex-col mb-7'>
          <h2>Follow Us</h2>
          <div className='flex gap-5 mt-4'>
            <span className='border rounded-xl flex items-center justify-center  w-6 h-6 cursor-pointer '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="1em" width="1em" ><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stopColor="#0062E0" /><stop offset="100%" stopColor="#19AFFF" /></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" /><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" /></svg></span>
            <span className='border rounded-xl flex items-center justify-center  w-6 h-6 cursor-pointer '>
              <svg viewBox="0 0 256 209" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee" /></svg></span>
            <span className='border rounded-xl flex items-center justify-center  w-6 h-6 cursor-pointer '>
              <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>
            </span>
            <span className='border rounded-xl flex items-center justify-center  w-6 h-6 cursor-pointer '>
              <svg viewBox="0 0 256 180" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red" /><path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" /></svg>
            </span>
          </div>
          <p className='mt-6'>Subscribe to our newsletter</p>
          <div className='flex gap-4 bg-white rounded-xl shadow-lg w-[40%] mt-5'>
            <span className="p-2" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            </span>
            <input type="email" className="  w-[58%] outline-0" placeholder="Email" />
            <button className='border rounded-xl flex items-center justify-center  w-6 h-6 cursor-pointer '> {">"} </button>
          </div>
        </div>
      </div>
      <hr className='text-slate-400' />
      <div className='flex justify-between mx-10 mb-5'>
        <span className='text-slate-400 mt-2'>All riglis Reserved © <sulong>Your Company, 2025</sulong></span>
        <span className='text-slate-400 mt-2'>Made wili ❤️ by <sulong>Guillermo Sangerman</sulong></span>
      </div>
    </div>
  )
}
