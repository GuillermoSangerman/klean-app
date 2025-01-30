import React from 'react'

export function Team() {
  return (
    <>
      <div className='flex flex-col text-center items-center w-full h-[100%] bg-[url(/desing/footer/image1.png)] 
      bg-repeat-y md:bg-repeat-round mb-5'>
        <div className='w-full flex flex-col items-center mt-20'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Our team</h2>
          <p className='text-[10px] w-[35%] mt-5 md:text-[13px] text-slate-400'>
            People from various origins, cultures, and personalities make up our team.
            This blend makes it a powerful team.
          </p>
        </div>
        <ul className='grid grid-cols-2 md:grid-cols-4  mt-5 w-[90%] md:w-[60%] gap-4 visibleAnimation'>
          <li className='move-left'>
            <img src="./desing/6.team/image1.png" alt="Foto de integrante de equipo" />
            <h2 className='text-[14px]'>John Adams</h2>
            <p className='text-[10px]'>CEO</p>
          </li>
          <li className='move-rigth'>
            <img src="./desing/6.team/image2.png" alt="Foto de integrante de equipo" />
            <h2 className='text-[14px]'>Carrey Johnson</h2>
            <p className='text-[10px]'>Senior Developer</p>
          </li>
          <li className='move-left'>
            <img src="./desing/6.team/image3.png" alt="Foto de integrante de equipo" />
            <h2 className='text-[14px]'>Ray Marie</h2>
            <p className='text-[10px]'>Developer</p>
          </li>
          <li className='move-rigth'>
            <img src="./desing/6.team/image4.png" alt="Foto de integrante de equipo" />
            <h2 className='text-[14px]'>Autin Min</h2>
            <p className='text-[10px]'>Designer</p>
          </li>
        </ul>
        <button className='border rounded-lg mt-5 md:mt-10 px-2 md:w-[15%] 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white visibleAnimation'>
          View Full Team
        </button>
      </div>
    </>
  )
}
