import React from 'react'
import { Link } from 'react-router'
export function Services() {
  return (
    <>
      <div className='flex flex-col bg-slate-200 justify-center items-center min-h-screen w-full'>
        <div className='flex flex-col justify-center items-center text-center my-20'>
          <h2 className='text-4xl font-bold'>Service</h2>
          <p className='mt-6 w-[60%] text-neutral-600'>
            We offer youth with chances for career development in their practice.
            We also support a wide range of services to ensure client satisfaction.
          </p>
        </div>
        <div className='flex min-h-screen min-w-full gap-4 justify-center'>
          <div className='flex flex-col shadow-lg bg-transparent  rounded-4xl  h-[100%] w-[28%]'>
            <div className='flex justify-center mt-16'>
              <img className='flex' height={140} width={140} src="./themewagon/themewagon/2.services/icon1.png" alt="icono de mensajes" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14 '>Send Texts Instantly</h2>
            <p className='mx-16 mt-4 '>Financial planning, forecasting and adjusting
              rapidly with customer demanda and budgets.</p>
            <Link className='text-blue-700 mx-16 my-8 '>Learn More ➡️</Link>
          </div>
          <div className='flex flex-col shadow-lg bg-transparent  rounded-4xl h-[100%] w-[28%]'>
            <div className='flex justify-center mt-16'>
              <img className='flex' height={140} width={140} src="./themewagon/themewagon/2.services/icon2.png" alt="icono de organizacion" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14'>Better Organized</h2>
            <p className='mx-12 mt-4'>Latest technology and experienced guidance,
              trained HR specialists to keep uodated.</p>
            <Link className='text-blue-700 mx-16 mt-14 mb-8'>Learn More ➡️</Link>
          </div>
          <div className='flex flex-col shadow-lg bg-transparent  rounded-4xl  h-[100%] w-[28%]'>
            <div className='flex justify-center mt-16'>
              <img className='flex' height={140} width={140} src="./themewagon/themewagon/2.services/icon3.png" alt="icono de engranajes" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14'>Analytical Statistics</h2>
            <p className='mx-14 mt-4'>Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
            <Link className='text-blue-700 mx-16 mt-14 mb-8'>Learn More ➡️</Link>
          </div>
        </div>
      </div>
    </>
  )
}
