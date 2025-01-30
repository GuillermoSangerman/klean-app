import React from 'react'

export function Projects() {
  return (
    <>
      <div className='flex flex-col w-full h-[100%] items-center bg-[url(/desing/footer/image1.png)] bg-repeat-y md:bg-repeat-round'>
        <div className='flex flex-col w-full items-center text-center mt-20'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Our Projects</h2>
          <p className='mt-4 w-[65%] text-[15px] text-slate-400'>A project is a single or team activity, combining research and design with best
            effort. Here are some of our team´s projects.
          </p>
        </div>
        <div>
          <ul className='w-full shadow-xl border-2 border-white bg-transparent p-5 rounded-2xl columns-3 md:gap-6 mt-5 md:mt-20'>
            <li className='rounded-lg move-up'><img src="./desing/5.projects/image1.png" alt="imagen de celular" /></li>
            <li className='rounded-lg mt-5 move-dowm'><img src="./desing/5.projects/image2.png" alt="imagen de celular" /></li>
            <li className='rounded-lg move-up' ><img src="./desing/5.projects/image3.png" alt="imagen de celular" /></li>
            <li className='rounded-lg mt-5 move-dowm' ><img src="./desing/5.projects/image4.png" alt="imagen de celular" /></li>
            <li className='rounded-lg move-up' ><img src="./desing/5.projects/image5.png" alt="imagen de celular" /></li>
            <li className='rounded-lg mt-5 move-dowm'><img src="./desing/5.projects/image6.png" alt="imagen de celular" /></li>
          </ul>
        </div>
        <div>
          <button className='my-10 border-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rotation-spin'>
            View More
          </button>
        </div>
      </div>


    </>
  )
}
