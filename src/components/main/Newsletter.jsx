import React from 'react'

const Newsletter = () => {
  return (
    <div><div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10">
    <img src="https://media.istockphoto.com/id/2153852692/photo/email-marketing-concept-for-business-communication-and-digital-marketing-direct-selling.webp?a=1&b=1&s=612x612&w=0&k=20&c=jPoOXhpIl_m7qvn3MXTGtYQC5wFdlNQUKIrMTTlhNJM=" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover object-bottom" />
    <div class="min-h-[400px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-white md:text-5xl text-4xl font-bold">Subscribe to Our Newsletter</h3>
        <p class="text-gray-300 text-sm mt-6">Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our community today!</p>

        <div class="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
          <input type='email' placeholder='Enter your email' class="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3" />
          <button type='button'
            class="bg-gray-800 hover:bg-gray-700 transition-all text-white tracking-wide text-sm rounded-full px-6 py-3">Submit</button>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Newsletter