import React from 'react'
import { assets } from '../assets/assets'

export default function Result() {
   const [image,setImage]=React.useState(assets.sample_img_1)
   const [isimageloaded,setimageloaded]=React.useState(false)
   const [loading,setloading]=React.useState(true)
   const [input,setinput]=React.useState('')

   const onSubmitHandler=async(e)=>{

   }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center
    items-center' >
    <div>
      <div className='relative'>
        <img className='max-w-sm rounded' src={image}></img>
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 
        $ {loading ? 'w-full transition-all duration-[10s]' : ' w-0'}`}></span>

      </div>
    
      <p className={!loading ? "hidden" : " "}>Loading....</p>
      

      
    </div>
    {!isimageloaded &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white
    text-sm p-0.5 mt-10 rounded-full ' >
     <input
      onChange={e =>setinput(e.target.value)} value={input} type='text' placeholder='Describe what you want to Generate'
      className='flex-1 bg-transparent outline-none ml-8
       max-sm:w-20 placeholder-color'></input>
     <button type='submit' className='
       bg-zinc-900 px-10 sm:px-16 py-3 rounded-full '>Genrate</button>  

    </div>
    }
    {isimageloaded && 
    <div className='flex gap-2 flex-wrap justify-center text-white
       text-sm p-0.5 mt-10 rounded-full'>
       <p className='bg-transparent border border-zinc-900
        text-black px-8 py-3 rounded-full cursor-pointer' 
        onClick={()=>{setimageloaded(false)}}>Genrate Another</p>
       <a href={image}  download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
    </div>
    }
    </form>
    
  )
}

