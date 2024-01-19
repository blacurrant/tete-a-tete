import React from 'react'
import TextMessage from './TextMessage'

const Texts = ({text}) => {
  return (
    <div className='h-[90%] w-full bg-blue-200 overflow-y-scroll'>
      <TextMessage text={text} />
    </div>
  )
}

export default Texts