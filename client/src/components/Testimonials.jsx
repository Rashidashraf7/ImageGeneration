import React from 'react';
// FIX 1: Import the 'assets' object
import { testimonialsData, assets } from '../assets/assets';

function Testimonials() {
  return (
    <div className='flex flex-col justify-center items-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
      <p className='text-grey-500 mb-12'>What Our Users Are Saying</p>
      <div className='flex flex-wrap justify-center gap-6'> {/* Added justify-center for better alignment */}
        {testimonialsData.map((testimonial) => (
          // FIX 2: Use a unique ID for the key instead of the index
          <div key={testimonial.id} className='max-w-sm p-6 bg-white rounded-lg shadow-md'> {/* Added some basic styling for the card */}
            <div className='flex flex-col items-center text-center'> {/* Centered content */}
              <img src={testimonial.image} className='w-20 h-20 rounded-full object-cover mb-4' alt={testimonial.name} />
              <h2 className='text-xl font-bold'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {/* Nested map does not need a unique ID as it's not reordered */}
                {Array(testimonial.stars).fill().map((_, index) => (
                  <img key={index} src={assets.rating_star} className='w-5 h-5' alt="rating star"/>
                ))}
              </div>
              <p className='text-gray-700 italic'>"{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;