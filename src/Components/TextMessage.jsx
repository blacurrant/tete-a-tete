import { Image } from 'antd'
import React from 'react'
import pfp from '../Images/portrait.jpg'

const TextMessage = ({text}) => {
  return (
    <div className='flex items-center gap-2 my-2 mx-2'>
        <Image src={pfp}  preview={false} width={20} height={20} className='rounded-full object-cover overflow-scroll'/>
        <div className='px-2 -py-2 bg-blue-950 text-blue-200 rounded-xl'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextMessage