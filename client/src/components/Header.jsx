import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center
    text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 
      bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>
            Best AI Image Generator
        </p>
        <img src={assets.star_icon} alt="header image"/>
      </div>
      <h1 className='text-2xl max-w-[250px] sm:text-7xl
      sm:max-w-[590px] mx-auto mt-10 text-centre '>Turn Text to <span className='text-blue-600'>Image </span>,in seconds.</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your
       imagination into visual art in seconds
     - just type, and watch the magic happen.</p>
     <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
        Generater Images
        <img  className="h-6" src={assets.star_group}></img>
     </button>

     <div className='flex flex-wrap justify-center items-center gap-3 mt-16'>
        {Array(6).fill('').map((item,index)=>(
            <img key={index} width={70} 
            src={index%2===0 ? assets.sample_img_2 :assets.sample_img_1} alt="" className=' rounded hover:scale-105 transitions-all duration-300 cursor-pointer max-sm:w-10' />
        ))}
     </div>
     <p className='text-stone-500 mt-4'>
        Generated images from imagify
     </p>


    </div>
  )
}

export default Header
