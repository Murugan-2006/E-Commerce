import React from 'react'

const NewsLetter = () => {
    const prevent=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center my-10'>
        <p className='text-2xl font-medium text-gray-600'>Subscribe  Now & Get 20% Off</p>
         <p className='mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, dolorum aut culpa iste similique dolor nostrum et, laborum autem exercitationem ab corrupti. Laborum tenetur soluta non aut molestias accusamus quia.</p>
    <form className='w-full sm:w-1/2 text-center  mx-auto my-6 pl-4'>
     <input className='w-flex sm:flex-1 outline-none'  type="email" placeholder="Enter your mail" required></input>
    <button onClick={prevent}type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
   </form>
    </div>
  )
}

export default NewsLetter
