import React, { useState } from 'react'
import imageCompression from 'browser-image-compression';

function Create() {
  const [formData,setFormData]=useState();
  const [imageData,setImageData]=useState();
  
  const handleImage=async(e)=>{

    const file=e.target.files[0];
    const name=e.target.name;

    const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 800, 
    useWebWorker: true,
    };

    try{
      const compressedFile=await imageCompression(file,options);
      setFormData({...formData,[name]:compressedFile})
      
    }
    catch(err){
      console.log(err)
    }



  }

  const handleChange=(name,value)=>{
    
    setFormData({
      ...formData,[name]:value
    });
  }

  console.log(formData);
  

  
  return (
    <div className=' py-6 px-8 flex flex-col gap-12'>
      <h1 className='text-3xl font-semibold'>Add 
        products</h1>
      <div>
        <form className='flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <label className=''>Enter product name:</label>
            <input type="text" name='productName' className='px-4 py-2' onChange={(e)=>{handleChange(e.target.name,e.target.value)}} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=''>Provide product image:</label>
            <input type="file" className='px-4 py-2 cursor-pointer  bg-white file:rounded-lg file:outline-none file:border-none file:bg-pink file:text-white file:px-2' accept='image/png, image/gif, image/jpeg' name='image' onChange={handleImage}  />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
            <label className=''>Enter price in Rs:</label>
            <input type="number" className='px-4 py-2' name='price' onChange={(e)=>{handleChange(e.target.name,e.target.value)}}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Enter the quantity</label>
              <input type="number" className='px-4 py-2 ' name='quantity' onChange={(e)=>{handleChange(e.target.name,e.target.value)}}/>
            </div>
            
          </div>
          <div className='flex flex-col gap-2'>
            <label className=''>Enter category :</label>
            <select className='py-3 px-2' name='Category' onChange={(e)=>{handleChange(e.target.name,e.target.value)}}>
              
              <option className='' value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
            </select>
          </div>
          <div className='flex flex-col gap-2 pt-1 self-start '>
            <button className=' py-2 cursor-pointer bg-red-400 text-white px-6'>Submit</button>
          </div>
        </form>
      </div>


      
    </div>
  )
}

export default Create