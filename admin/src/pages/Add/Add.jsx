import React, { useState, useEffect } from 'react'
import './Add.css'
import { assets } from '../../assets/assets.js'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: " ",
    description: " ",
    price: " ",
    category: "Dessert"
  });

  //to save the updated data for each product added
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  // to check the updated data
  useEffect(()=>{
    console.log(data);
  },[data])

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData)    //we can store our image directly to the backend folder through this
    if(response.data.success){
      setData({
        name: " ",
        description: " ",
        price: " ",
        category: "Dessert"
      })
      setImage(false) 
      toast.success("Food added succesfully") //this is to notify on the webpage that if image added or not
    }
    else{
        toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='write content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" id="" onChange={onChangeHandler} value={data.category}>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Dessert</option>
              <option value="Indian">Indian</option>
              <option value="Continental">Continental</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button className='add-btn' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add;
