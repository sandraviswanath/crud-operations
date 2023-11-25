import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from './CrudData';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [first,setfirst] = useContext(mycontext);
    const navigate=useNavigate()
    const {id}=useParams()

    const [edited, setedited] = useState({
      name:'',
      price:'',
    
    })
    useEffect(()=>{
        const personToedit =first.find((person)=>person.id === id)
        if(personToedit){
            setedited({
                name:personToedit.name,
                price:personToedit.price
            })
        }
    },[first,id]);

    const handleInputchange =(e) =>{
        setedited({
            ...edited,
            [e.target.name]:e.target.value,
        });
    };
        const handleUpdate =() =>{
            const updatedData = first.map((person)=>
            person.id === id ? {...person, ...edited} : person
            );
       
        setfirst(updatedData);
        navigate('/')
    }
  return (
    <div>
    <div id="subtotal">
    <h3>Update Data</h3>
    <table>
        <tr>
            <td><label>name:</label></td>
            <td><input type='text' name='name' value={edited.name} onChange={handleInputchange}/>
            </td>
        </tr>
        <tr>
            <td><label>price:</label></td>
            <td><input type='number' name='price' value={edited.price} onChange={handleInputchange}/>
            </td>
        </tr>
       
    </table>
    <button class="normal" onClick={handleUpdate}>Update</button>
</div>


    </div>
  )
}

export default Edit
