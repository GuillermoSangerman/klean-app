import React from 'react'
import { Main } from '../components/Main'

export function Home() {
  return (
   <Main>
         <div className='felx flex-col min-w-full  bg-[url(./themewagon/themewagon/background_elements.png)] bg-no-repeat '>
            <div className='flex  w-full justify-center items-center '>
                <div className='flex flex-col min-w-[50%] ps-40'>
                    <h1 className='text-4xl'>Bootstrap 5 theme</h1>
                    <h3 className='text-3xl mt-2'>crafted by <strong>ThemeWagon</strong></h3>
                    <p className='mt-2'>ThemeWagon offers an wide array of category-oriented
                    Free and Premium Bootstrap HTML Templates and Themes.</p>
                    <button className='flex  bg-violet-500 w-[25%] mt-5 rounded-md'>Check Demo</button>
                </div>
                <div className='min-w-[50%]'><img src="./themewagon/themewagon/1.home/illustration1.png" alt="imagen ilustrativa de reunion de chicos" /></div>
            </div>
            <ul className='flex gap-20 p-20 mx-8 mt-8'>
                <li><img src="./themewagon/themewagon/1.home/google.png" alt="logo google" /></li>
                <li><img src="./themewagon/themewagon/1.home/netflix.png" alt="logo netflix" /></li>
                <li><img src="./themewagon/themewagon/1.home/microsoft.png" alt="logo microsoft" /></li>
                <li><img src="./themewagon/themewagon/1.home/mailbuster.png" alt="logo mailbuster" /></li>
                <li><img src="./themewagon/themewagon/1.home/themewagon.png" alt="logo themewagon" /></li>
            </ul>
         </div>
   </Main>
  )
}
