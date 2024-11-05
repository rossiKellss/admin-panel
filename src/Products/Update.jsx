import React from 'react'

function Update() {
  return (
    <div className=' py-6 px-8 flex flex-col gap-12'>
      <h1 className='text-3xl font-semibold'>Update 
        products</h1>
      <div>
        <form className='flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <label className=''>Enter product name:</label>
            <input type="text" className='px-4 py-2 ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=''>Provide product image:</label>
            <input type="file" className='px-4 py-2 cursor-pointer  bg-white file:rounded-lg file:outline-none file:border-none file:bg-pink file:text-white file:px-2' accept='image/png, image/gif, image/jpeg' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=''>Enter product in Rs:</label>
            <input type="number" className='px-4 py-2 ' />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=''>Enter category :</label>
            <select className='py-3 px-2'>
              
              <option className=''>Vegetable</option>
              <option>Fruit</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 pt-2 self-start '>
            <button className=' py-2 cursor-pointer bg-red-400 text-white px-6'>Submit</button>
          </div>
        </form>
      </div>


      
    </div>
  )
}

export default Update