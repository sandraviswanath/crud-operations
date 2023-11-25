import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mycontext } from './CrudData';
import { Button } from 'react-bootstrap';


function Add() {
  const [first,setfirst] = useContext(mycontext);
  const [firsts, setfirsts] = useState({
    name: "",
    price:"",
    ename:"",
  });
  const navigate = useNavigate();
  const create = (e)=>{
    const name=e.target.name;
    const value= e.target.value;
    setfirsts({...firsts, [name]: value});
    // console.log(first);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    let i= firsts.id;
    let a= firsts.name;
    let b= firsts.price;
    console.log(i);
    first.push({
      id:i,
      name:a,
      price:b,
    });
    navigate("/"); 
  }
  
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={first.name} name="name" onChange={create} />
      <br></br>
      <label>Price:</label>
      <input type="number" value={first.price} name="price" onChange={create}/>
      {/* <br></br>
      <label>ename:</label>
      <input type="email" value={data.ename} name="ename" onChange={create}/> */}
<Button onClick={(e)=> handleSubmit(e)} type="submit">Add</Button>
    </div>
  )
}

export default Add