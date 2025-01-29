import React from 'react'
export function Contact() {
  return (
    <>
      <div className='w-full text-center my-5'>
        <h2 className='text-3xl font-semibold'>Contact Us</h2>
      </div>

      <div className='flex items-center justify-end h-[100%] w-full bg-[url(/desing/7.contact/image1.png)] bg-repeat-round mt-14'>
        <form className='flex flex-col rounded-lg shadow-lg items-center h-[100%] w-[30%] bg-transparent'>
          <div className='flex gap-4 bg-white rounded-xl shadow-lg w-[80%] mt-5'>
            <span className="p-2" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            </span>
            <input type="text" className="py-1 px-3 w-[100%] outline-0 " placeholder="Write your name" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div className='flex gap-4 bg-white rounded-xl shadow-lg w-[80%] mt-5'>
            <span className="p-2" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            </span>
            <input type="email" className="py-1 px-3 w-[100%] outline-0" placeholder="Write your email" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div className='flex gap-4 bg-white rounded-xl shadow-lg w-[80%]  mt-5 '>
            <span className='p-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
            </span>
            <textarea className='pb-20 px-3 w-[100%] outline-0' placeholder='Write your message' name="text_area" id="text_area"></textarea>
          </div>
          <button className='bg-blue-600 w-[80%] rounded-xl mt-5 mb-10 text-white'>Submit</button>
        </form>

        <div className='flex  w-[50%] h-[100%] '>
          <div className='flex flex-col h-[100%]'>
            <div className='flex h-[100%] mt-4'>
              <span className='border-2 border-white p-1 h-7 mx-5 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              </span>
              <div className='flex flex-col'>
                <span className='font-semibold'>Phone</span>
                <span className='mt-2'>+880124332334</span>
              </div>
            </div>
            <div className='flex h-[100%] mt-9'>
              <span className='border-2 border-white p-1 h-7 mx-5 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              </span>
              <div className='flex flex-col'>
                <span className='font-semibold'>Email</span>
                <span className='mt-2'>somethings@email.com</span>
              </div>
            </div>
            <div className='flex h-[100%] mt-9'>
              <span className='border-2 border-white p-1 h-7 mx-5 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              </span>
              <div className='flex flex-col'>
                <span className='font-semibold'>Location</span>
                <span className='mt-2 w-[45%]'>43/A Spooner Street, St laurence, Virginia Texas
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
