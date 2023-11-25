import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import data from './Crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrudTable from './CrudTable';
import CrudDetails from './CrudDetails';
import Add from './Add';
import Edit from './Edit';



const mycontext= createContext()
function CrudData() {

    const [first, setfirst] = useState(data)
    console.log(data);
  return (
    <div>
      <mycontext.Provider value={[first,setfirst]}>

<BrowserRouter>
<Routes>
    <Route path='/' element={<><CrudTable/></>}/>
    <Route path='/Cruddetails/:itemid' element={<><CrudDetails/></>}/>
    <Route path='/create' element={<><Add/></>}/>
    <Route path='/edit' element={<><Edit/></>}/>
</Routes>
</BrowserRouter>

      </mycontext.Provider>
    </div>
  )
}

export default CrudData
export {mycontext}
