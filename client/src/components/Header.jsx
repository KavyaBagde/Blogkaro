import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/appContext'

const Header = () => {

  const {setInput , input} = useAppContext();

  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    setInput(inputRef.current.value);
    e.preventDefault();
  }

  const onClear = () => {
    setInput('');
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>

        <div className='text-center mt-20 mb-8 '>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New: AI blog writer feature</p>
                <img src={assets.star_icon} alt="star_icon" className='w-2.5'/>
            </div>

            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700  ' >For the <span className='text-primary'> bloggers</span> <br /> by the blogger.</h1>

            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos accusantium possimus placeat excepturi delectus deleniti illo, illum corrupti tempore debitis. Amet quos adipisci molestias, praesentium deserunt cum minus neque voluptatum?</p>

            <form onSubmit={onSubmitHandler} className='flex justify-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input ref={inputRef} type="text" placeholder='Search for blogs' required className='pl-4 w-full outline-none' />
                <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer '>Search</button>
            </form>

        </div>

        <div className='text-center'>
         {input && <button onClick={onClear}  className='border font-light text-xs py-1 px-3 rounded-sm  shadow-custom-sm cursor-pointer'>Clear Search</button> }
        </div>

        <img src={assets.gradientBackground} alt="gradientBackground" className='absolute opacity-50 -top-50 -z-1' />      
    </div>
  )
}

export default Header
