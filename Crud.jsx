import React, { useState } from 'react'

function Crud() {
    const [formdata, setformdata] = useState({
        image:'',
        product:'',
        price:'',
        quantity:''
    })
    const handleInputChange=(e)=>{
        const name=e.target.name
        const value =e.target.value
        setformdata({...formdata ,[name]:value})
    }
    const handleSubmit =()=>{
        alert(`saved..!!!`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formdata.image} onChange={handleInputChange} />
      </label>
      <label>
        Date of Birth:
        <input type="text" name="dob" value={formdata} onChange={handleInputChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formdata} onChange={handleInputChange} />
      </label>
      <button type="submit" >Submit</button>
    </form>
    </div>
  )
}

export default Crud
