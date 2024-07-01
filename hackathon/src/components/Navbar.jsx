import React from 'react'
export const Navbar = () => {
  return (
    <div className="flex">
      <div className="m-4 bg-gradient-to-r from-purple-200 to-purple-400 flex flex-row justify-between flex-1 rounded-2xl p-3 sticky">
        <div className="font-titlee text-black  text-4xl flex items-center cursor-pointer">
          SIGKDD
        </div>
        <div className="text-black flex flex-row justify-between gap-8 text-2xl items-center font-oswald font-medium ">
          <span
            className='cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5 '
          >
            Home
            <span
              className='absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full'
              style={{ transitionProperty: 'width' }}
            />
          </span>
          <span
            className='cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5'
          >
            Agenda
            <span
              className='absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full'
              style={{ transitionProperty: 'width' }}
            />
          </span>
          <span
            className='cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5'
          >
            Schedule
            <span
              className='absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full'
              style={{ transitionProperty: 'width' }}
            />
          </span>
          <span
            className='cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5'
          >
            FAQs
            <span
              className='absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full'
              style={{ transitionProperty: 'width' }}
            />
          </span>
          <span
            className='cursor-pointer hover:scale-110 transition duration-700 ease-out relative group p-1.5'
          >
            Contact
            <span
              className='absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition duration-700 ease-out group-hover:w-full'
              style={{ transitionProperty: 'width' }}
            />
          </span>
        </div>
        <div className="text-black">
          <button className='border-2 border-black rounded-xl text-2xl items-center font-semibold p-2 '>Register</button>
        </div>
      </div>
    </div>
  )
}