import React from 'react'

export function Projects() {
  return (
    <>
      <div className='flex flex-col min-w-full min-h-screen items-center'>
        <div className='flex flex-col items-center text-center mt-10'>
          <h2 className='text-3xl font-semibold'>Our Projects</h2>
          <p className='mt-4 w-[65%]'>A project is a single or team activity, combining research and design with best
            effort. Here are some of our team´s projects.
          </p>
        </div>
        <div>
          <ul className='w-full min-h-screen shadow-lg p-5 rounded-2xl columns-3 gap-6 mt-20'>
            <li className='rounded-lg'><img src="./themewagon/themewagon/5.projects/image1.png" alt="" /></li>
            <li className='rounded-lg mt-5'><img src="./themewagon/themewagon/5.projects/image2.png" alt="" /></li>
            <li className='rounded-lg' ><img src="./themewagon/themewagon/5.projects/image3.png" alt="" /></li>
            <li className='rounded-lg mt-5' ><img src="./themewagon/themewagon/5.projects/image4.png" alt="" /></li>
            <li className='rounded-lg' ><img src="./themewagon/themewagon/5.projects/image5.png" alt="" /></li>
            <li className='rounded-lg mt-5'><img src="./themewagon/themewagon/5.projects/image6.png" alt="" /></li>
          </ul>
        </div>
        <div>
          <button className='mt-10 border-2 px-4 '>View More</button>
        </div>
      </div>


    </>
  )
}
