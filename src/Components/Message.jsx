import React from 'react'
import Input from 'antd/es/input/Input'

const Message = ({input, handleInput, handleSubmit}) => {

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className='flex h-full w-full bg-blue-200'>
        <Input value={input} onChange={handleInput} onKeyDown={handleKeyDown} className='h-full overflow-hidden' type="text" placeholder='type here...' required/>
        {/* <button type='button' onClick={} className='w-[5vh] justify-end'>send</button> */}
    </div>
  )
}

export default Message