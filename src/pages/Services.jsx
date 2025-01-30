import React from 'react'
import { Link } from 'react-router'
export function Services() {
  return (
    <>
      <div className='flex flex-col  bg-[url(/desing/2.services/illustration1.png)] bg-repeat-y md:bg-no-repeat justify-center items-center min-h-screen w-full mb-4'>
        <div className='flex flex-col justify-center items-center text-center mt-20'>
          <h2 className='text-2xl md:text-4xl font-bold'>Service</h2>
          <p className='mt-6 w-[60%] text-slate-400 text-[10px] md:text-[1rem]'>
            We offer youth with chances for career development in their practice.
            We also support a wide range of services to ensure client satisfaction.
          </p>
        </div>
        <div className='flex flex-col md:flex-row min-h-screen w-full gap-4 justify-center items-center mt-8'>
          <div className='flex flex-col shadow-xl border-2 border-white bg-transparent  rounded-4xl w-[90%] h-[100%] md:w-[28%] move-left'>
            <div className='flex justify-center mt-4 '>
              <img className='flex' height={140} width={140} src="./desing/2.services/icon1.png" alt="icono de mensajes" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14 '>Send Texts Instantly</h2>
            <p className='mx-16 mt-4 text-slate-400 '>Financial planning, forecasting and adjusting
              rapidly with customer demanda and budgets.</p>
            <Link className='text-blue-700 mx-16 my-8 '>Learn More &rarr;</Link>
          </div>
          <div className='flex flex-col shadow-xl border-2 border-white bg-transparent  rounded-4xl w-[90%] h-[100%] md:w-[28%] move-dowm'>
            <div className='flex justify-center mt-4 '>
              <img className='flex' height={140} width={140} src="./desing/2.services/icon2.png" alt="icono de organizacion" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14 '>Better Organized</h2>
            <p className='mx-12 mt-4 text-slate-400 '>Latest technology and experienced guidance,
              trained HR specialists to keep uodated.</p>
            <Link className='text-blue-700 mx-16 mt-14 mb-8'>Learn More &rarr;</Link>
          </div>
          <div className='flex flex-col shadow-xl border-2 border-white bg-transparent  rounded-4xl w-[90%] h-[100%] md:w-[28%] move-rigth'>
            <div className='flex justify-center mt-4 '>
              <img className='flex' height={140} width={140} src="./desing/2.services/icon3.png" alt="icono de engranajes" />
            </div>
            <h2 className='flex font-bold text-2xl mt-16 mx-14'>Analytical Statistics</h2>
            <p className='mx-14 mt-4 text-slate-400 '>Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
            <Link className='text-blue-700 mx-16 mt-14 mb-8'>Learn More &rarr;</Link>
          </div>
        </div>
      </div>
    </>
  )
}
