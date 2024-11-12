import React,{useState,useRef} from 'react'
import { useSelector } from 'react-redux'
import { useUpdateProductsMutation } from '../api/productApiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert } from '../Alert/Alert';

function Update() {
  const navigate=useNavigate();
  const [updateProducts]=useUpdateProductsMutation();
  const params=useParams();
  const data=useSelector(state=>state.product)
 
  const [formCred, setformCred] = useState({
    ProductName: data.ProductName,
    Price: data.Price,
    Quantity: data.Quantity,
    Category: data.Category,
  });

  

  const handleChange = (name, value) => {
    setformCred({
      ...formCred,
      [name]: value,
    });
  };

   // for capatilizing the first letter
   const capatilizeLetter = (value) => {
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    return capitalized;
  };

  console.log(formCred);

  const handleSubmit=async(e)=>{
    e.preventDefault();
      const formData = new FormData();
      

      Object.entries(formCred).map(([key, value]) => {
        if (key == "Productname") {
          const capitilizedVal = capatilizeLetter(value);
          setformCred({...formCred,ProductName:capitilizedVal});
        } 
      });

      try {
        const res = await updateProducts({id:params.id,formCred}).unwrap();
        console.log(res);
       
        
        Alert({message:res.message,icon:"success",color:"green"})
        navigate('/products/list-all')
      } catch (err) {
        console.log(err)
        const message=err.data.err
        Alert({message:message,icon:"error",color:"red"})
      }

  }
  
  return (
    <div className=" py-6 px-8 flex flex-col gap-12">
    <h1 className="text-3xl font-semibold">Update products</h1>
    <div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="">Enter product name:</label>
          <input
            required
            type="text"
            name="ProductName"
            value={formCred.ProductName}
            className="px-4 py-2"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label className="">Enter price in Rs:</label>
            <input
              required
              type="number"
              className="px-4 py-2"
              name="Price"
              value={formCred.Price}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Enter the quantity</label>
            <input
              type="number"
              className="px-4 py-2"
              name="Quantity"
              value={formCred.Quantity}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Enter category :</label>
          <select
            required
            className="py-3 px-2"
            name="Category"
            value={formCred.Category}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            
          >
           
            <option  value="Vegetable">
              Vegetable
            </option>
            <option value="Fruit">Fruit</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 pt-1 self-start ">
          <button className=" py-2 cursor-pointer bg-red-400 text-white px-6">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update