import React from 'react'
import Chats from './Chats'
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';

const Sidebar = ({ handleToggle }) => {
  return (
    <div className='flex flex-col w-[30%] border border-double border-blue-200 '>
        <div className='flex justify-between items-center bg-blue-950 text-blue-200 px-5'>
          <p className='tracking-widest font-semibold'> tête-à-tête</p>
          {/* <p className='cursor-pointer transition-all ease-in-out duration-2000' onClick={handleToggle}> +</p> */}
        </div>
        <Chats />
        <button onClick={ () => signOut(auth)} className='border-none outline-none  bg-blue-900 h-[10%] rounded-lg font-semibold text-lg text-blue-200 tracking-wide hover:bg-blue-500 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Sidebar