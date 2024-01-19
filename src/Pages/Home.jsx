import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import Hamburger from '../Components/Hamburger'
import bg from '../Images/chat-bg.png'
import { Image } from 'antd'

const Home = () => {

    const [sidebarToggle, setSidebarToggle] = useState(true)

    const handleToggle = () => { 
        setSidebarToggle(!sidebarToggle);
    }

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
        <Image className=' relative' src={bg} preview={false}/>
        <div className='absolute flex lg:h-[70vh] lg:w-[100vh] h-[100vh] w-screen bg-blue-900 border-2 border-color3'>
            { sidebarToggle ? <Sidebar handleToggle={handleToggle} /> : < Hamburger handleToggle={handleToggle} /> }
            <Chat  handleToggle={handleToggle}/>
        </div>
    </div>
  )
}

export default Home