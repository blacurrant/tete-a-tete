import React,{useContext, useState} from 'react'
import Texts from '../Components/Texts'
import Message from './Message'
import { Button, Image } from 'antd'
import pfp from '../Images/portrait.jpg'
import { AuthContext } from '../Context/AuthContext'

const Chat = ({handleToggle}) => {

  const { user } = useContext(AuthContext);

  const [input, setInput] = useState('')
  const [text, setText] = useState('')

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = () => {
    setText(input);
    setInput('');
    
  }

  return (
    <div className='flex flex-col w-full border border-double border-white'>
        <div className='flex justify-between items-center bg-blue-900 text-blue-200 px-5'>
          <div className='flex items-center gap-2'>
            <h1 onClick={handleToggle} className='font-semibold text-lg cursor-pointer'>+</h1>
            <Image src={user.photoURL} width={40} height={40} className='rounded-full object-cover'/>
            <h1 className='text-lg font-semibold'>{user.displayName}</h1>
          </div>
          <div className='flex gap-5 font-bold'>
            <p>o</p>
            <p>...</p>
          </div>
        </div>
        <Texts text={text} />
        <div className='flex justify-between items-center h-[10%] bg-blue-200'>
          <Message input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
          <Button type='submit' onClick={handleSubmit} className='h-full p-5 font-semibold bg-blue-900 hover:bg-blue-500 text-white'>Send</Button>
        </div>
    </div> 
    )
}

export default Chat