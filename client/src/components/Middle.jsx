import React from 'react'
import { assets } from '../assets/assets'

const Middle = () => {
  return (
    <div className='flex flex-col justify-center items-center my-24 p-6 md:px-28 '>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images </h1>
      <p className='text-grey-500 mb-8'> Transform your text into stunning images with our AI-powered generator. Simply enter your description, choose a style, and let our advanced algorithms bring your vision to life in seconds.</p>
      <div className='flex flex-col  gap-5 md:gap-14 md:flex-row justify-center items-center'>
          <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg'></img>
          <div  className='flex flex-col  md:max-w-lg '>
            <h2 className='text-3xl font-medium mx-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Experience the future of creativity with our AI-powered
             text to image generator. Transform your words into stunning
              visuals in seconds. Perfect for designers, marketers, and
               creatives looking to bring their ideas to life 
               effortlessly.</p>
             

          </div>
      </div>
     
      
    </div>
  )
}

export default Middle
