import React from 'react'

export function Team() {
  return (
    <>
      <div className='flex flex-col text-center items-center w-full min-h-screen'>
        <div className='w-full flex flex-col items-center mt-20'>
          <h2 className='text-3xl font-semibold'>Our team</h2>
          <p className='w-[35%] mt-5 text-[13px]'>
            People from various origins, cultures, and personalities make up our team.
            This blend makes it a powerful team.
          </p>
        </div>
        <ul className='grid grid-cols-4 mt-5 w-[60%] gap-4'>
          <li> 
            <img src="./desing/6.team/image1.png" alt="" />
            <h2>John Adams</h2>
            <p>CEO</p>
          </li>
          <li> 
            <img src="./desing/6.team/image2.png" alt="" />
            <h2>Carrey Johnson</h2>
            <p>Senior Developer</p>
          </li>
          <li> 
            <img src="./desing/6.team/image3.png" alt="" />
            <h2>Ray Marie</h2>
            <p>Developer</p>
          </li>
          <li> 
            <img src="./desing/6.team/image4.png" alt="" />
            <h2>Autin Min</h2>
            <p>Designer</p>
          </li>
        </ul>
        <button className='border rounded-lg mt-10 px-2 w-[15%]'>View Full Team</button>
      </div>
    </>
  )
}
