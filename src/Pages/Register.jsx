import React from 'react'

const Register = () => {

  const classProp = "p-[15px] border-b border-color5 bg-color4"
  return (
    <div id='#signup' className='h-[100vh] flex bg-gradient-to-r from-color5 from-50% to-color4 '>
        <div className='flex flex-col justify-center px-[20vh] py-5 bg-color4 rounded-lg drop-shadow-lg'>
          <span className='text-color1 font-bold tracking-widest text-3xl drop-shadow-lg'>tête-à-tête</span>
          <span>something meaningful</span>
          <form className='flex flex-col gap-5'>
            <input className={classProp} type='text' placeholder='name' />
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input type='file' placeholder='select'/>
            <button type='submit'>Sign Up</button>
          </form>
          <p>already have an account? <a href=''>Login</a></p>
        </div>
    </div>
  )
}

export default Register