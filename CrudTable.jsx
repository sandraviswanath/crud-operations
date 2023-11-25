import React, { useContext } from 'react'
import {} from './Crud.css'

import { mycontext } from './CrudData'
import { Link, useNavigate } from 'react-router-dom'
function CrudTable() {
    const [first,setfirst] = useContext(mycontext)
    let history = useNavigate()

    const handleDelete =(id)=>{
        var index =first.map(function(e){
            return e.id
        }).indexOf(id);
        first.splice(index,1);
        history ('/');

    }

    
  return (
    <div id="cart" className="section-p1">
    <table width="100%">
<thead>
    <tr>
        <td>Remove</td>
        <td>Image</td>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Update</td>
        
    </tr>
</thead>
<tbody>
{first.map((demo)=>
    <tr>
        {/* <button onClick={mycontext.id}></button> */}
        <td><i class="fa-solid fa-trash" onClick={()=>handleDelete(demo.id)} style={{color:'black'}} ></i></td>
       
        <td><Link to = {`/Cruddetails/${demo.id}`}><img src={demo.image} alt=""/></Link></td>
        <td>{demo.name}</td>
        <td>{demo.price}</td>
        <td><input type="number" value="1"/></td>
         <td><Link to={'/edit'}><i class="fa-solid fa-plus"  style={{color:'black'}}></i></Link></td>
        
    </tr>
    
)}
</tbody>
    </table>
    <div className='normal-btn'>
    <Link to={'/create'}><button class="normal">Add To Cart</button></Link>
    </div>
    </div>
  )
}

export default CrudTable
