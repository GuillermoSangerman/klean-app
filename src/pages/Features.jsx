import React from 'react'

export function Features() {
  return (
    <>
      <div className='w-full min-h-screen flex flex-col text-center items-center justify-center'>
        <div className='mt-10 w-full flex flex-col items-center'>
          <h2 className='font-semibold text-4xl'>Features</h2>
          <p className='text-slate-400 mt-5 w-[45%]'>
          We provide a number of excellent features that will undoubtedly improve the user experience. 
          We also provide a better support system
          </p>
        </div>
        <ul className='grid grid-cols-3 w-[74%] mt-14'>
          <li className='flex flex-col items-center'>
            <img className='h-16' src="./desing/4.features/icon1.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>Encrypted Mail</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>A process of encrypting email communications</p>
          </li>
          <li className='flex flex-col items-center'>
            <img className='h-16' src="./desing/4.features/icon2.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>Display Sharing</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>With other participants, you may share your screen</p>
          </li>
          <li className='flex flex-col items-center'>
            <img className='h-16' src="./desing/4.features/icon3.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>Private Notebook</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>Private Notebook is an application that is protected</p>
          </li>
          <li className='flex flex-col items-center mt-8 mb-4'>
            <img className='h-16' src="./desing/4.features/icon4.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>App App Assistance</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>App Assistant is quickly and effectively ran the system</p>
          </li>
          <li className='flex flex-col items-center mt-8 mb-4'>
            <img className='h-16' src="./desing/4.features/icon5.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>Multiple Printing</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>Our canvas prints are crafted on top-notch canvas.</p>
          </li>
          <li className='flex flex-col items-center mt-8 mb-4'>
            <img className='h-16' src="./desing/4.features/icon6.png" alt="" />
            <h3 className='font-semibold text-[17px] mt-3'>Free Sketch</h3>
            <p className='text-slate-400 mt-3 w-[70%] text-[13px]'>Our canvas prints are crafted on top-notch canvas.</p>
          </li>
        </ul>
      </div>
    </>
  )
}
