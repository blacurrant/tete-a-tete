import React from 'react'
import pfp from '../Images/portrait.jpg'
import { Image } from 'antd'

const Person = () => {
  return (
    <div className='flex items-center gap-2 px-2 w-full border border-double border-blue-200 cursor-pointer hover:bg-blue-950'>
        <Image src={pfp}  preview={false} width={40} height={40} className='rounded-full object-cover'/>
        <div className='px-2 -py-2 text-blue-200 font-semibold text-lg'>
            <p>Ophelia</p>
        </div>
    </div>
  )
}

export default Person