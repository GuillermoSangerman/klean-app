import React from 'react'

export function Details() {
  return (
    <>
      <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[url(/desing/3.details/illustration1.png)] bg-repeat-round '>
        <div className='flex flex-col md:flex-row gap-10 mt-20 w-[70%]  bg-[url(/desing/3.details/illustration1.png)] bg-no-repeat '>
          <div>
            <img className='scaley' src="./desing/3.details/illustration3.png" alt="imagen de computadora" />
          </div>
          <div className='md:w-[77%] visibleAnimation'>
            <h2 className='font-semibold  md:text-4xl mt-8'>A creative team which builds stunning UI/UX</h2>
            <p className='mt-8 text-slate-400 text-[10px] md:text-[1rem]'>
              Today.I'd like to show you some incredible Sign Up screen app UI ideas and
              concepts that offer a modern user experience.
              The most stunning, cutting-edge UI/UX.
            </p>
            <p className='mt-8 text-slate-400 text-[10px] md:text-[1rem]'>
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice,
              carefully curated by <strong>ThemeWagon.</strong>
            </p>
            <button className='mt-9 border rounded-xl w-[40%] md:w-[25%] h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
             text-white'>
              Read More
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10  md:mt-20 w-[70%] mb-8 bg-[url(/desing/3.details/illustration2.png)] bg-no-repeat '>
          <div className='md:w-[77%] visibleAnimation'>
            <h2 className='font-semibold md:text-4xl mt-16 w-[80%]'>Devoted to defining the cutting edge</h2>
            <p className='mt-8 text-slate-400 w-[90%] text-[10px] md:text-[1rem]'>
              "This new creation is cutting-edge technology." says the researcher, "Whose study originates from a business <br />
              at the forefront of space science"
            </p>
            <p className='mt-8 text-slate-400 text-[10px] md:text-[1rem]'>
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice,
              carefully curated by <strong>ThemeWagon.</strong>
            </p>
            <button className='mt-9 border rounded-xl w-[40%] md:w-[25%] h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
             text-white'>
              Read More
            </button>
          </div>
          <div className='rotationy'>
            <img src="./desing/3.details/illustration6.png" alt="imagen de grupo de amigos" />
          </div>
        </div>
      </div>
    </>
  )
}
