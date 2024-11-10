  import React, { useState,useRef } from "react";
  import imageCompression from "browser-image-compression";
  import { useAddProductsMutation } from "../api/productApiSlice";
  import {Alert} from '../Alert/Alert'


  function Create() {
    const [addProduct] = useAddProductsMutation();
    const fileRef=useRef();
    const [formCred, setformCred] = useState({
      ProductName: "",
      Price: "",
      Quantity: "",
      Category: "Vegetable",
    });

    const handleImage = async (e) => {
      const file = e.target.files[0];
      const name = e.target.name;

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        setformCred({ ...formCred, [name]: compressedFile });
      } catch (err) {
        console.log(err);
      }
    };

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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      Object.entries(formCred).map(([key, value]) => {
        if (key == "Productname") {
          const capitilizedVal = capatilizeLetter(value);
          formData.append(key, capitilizedVal);
        } else {
          formData.append(key, value);
        }
      });

      try {
        const res = await addProduct(formData).unwrap();
        console.log(res);
        setformCred({
          ProductName: "",
          Price: "",
          Quantity: "",
          Category: "Vegetable",
        });
        if(fileRef.current){
          fileRef.current.value="";

        }
        Alert({message:res.message,icon:"success",color:"green"})
      } catch (err) {
        console.log(err)
        const message=err.data.err
        Alert({message:message,icon:"error",color:"red"})
      }
    };

    console.log(formCred);

    return (
      <div className=" py-6 px-8 flex flex-col gap-12">
        <h1 className="text-3xl font-semibold">Add products</h1>
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
            <div className="flex flex-col gap-2">
              <label className="">Provide product image:</label>
              <input
                required
                type="file"
                className="px-4 py-2 cursor-pointer  bg-white file:rounded-lg file:outline-none file:border-none file:bg-pink file:text-white file:px-2"
                accept="image/png, image/gif, image/jpeg"
                name="Picture"
                ref={fileRef}
                onChange={handleImage}
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
    );
  }

  export default Create;
