import React from 'react'
import { Main } from '../components/Main'

export function Home() {
  return (
   <Main>
         <div className='flex flex-col w-full  text-center md:text-start bg-[url(/desing/background_elements.png)] bg-no-repeat mb-4'>
            <div className='flex w-full  items-center  md:mt-0'>
                <div className='flex flex-col  items-center h-[360px] md:items-start md:h-[100%] md:w-[50%] md:ps-40 
                bg-[url(/desing/1.home/illustration1.png)] bg-no-repeat md:bg-none visibleAnimation'>
                    <h1 className='text-2xl md:text-4xl mt-14 '>Bootstrap 5 theme</h1>
                    <h3 className='text-[14px] md:text-3xl mt-2'>crafted by <strong>ThemeWagon</strong></h3>
                    <p className='text-[10px] md:text-[1rem] mt-2'>ThemeWagon offers an wide array of category-oriented
                    Free and Premium Bootstrap HTML Templates and Themes.</p>
                    <button className='flex ps-5 w-[25%] md:w-[30%] mt-5 rounded-md py-1 shadow-xl 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[9px] md:text-[1rem] move-rigth'>
                        Check Demo
                    </button>
                </div>
                <div className='hidden md:flex min-w-[40%] visibleAnimation'><img src="./desing/1.home/illustration1.png" 
                alt="imagen ilustrativa de reunion de chicos" /></div>
            </div>
            <ul className='flex gap-4 md:gap-20 mx-8 md:mt-20 visibleAnimation'>
                <li><img src="./desing/1.home/google.png" alt="logo google" /></li>
                <li><img src="./desing/1.home/netflix.png" alt="logo netflix" /></li>
                <li><img src="./desing/1.home/microsoft.png" alt="logo microsoft" /></li>
                <li><img src="./desing/1.home/mailbuster.png" alt="logo mailbuster" /></li>
                <li><img src="./desing/1.home/themewagon.png" alt="logo themewagon" /></li>
            </ul>
         </div>
   </Main>
  )
}
