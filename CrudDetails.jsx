import React, { useContext } from 'react'
import {} from './Details.css'
import { mycontext } from './CrudData'
import { useParams } from 'react-router-dom'
function CrudDetails() {
    const [first,setfirst] = useContext(mycontext)
    const {itemid}=useParams()
console.log()
    const currentdata = first.find(item=> item.id === itemid)
  return (
    <div>
        
      <section id="prodetails" class="section-p1">
      
    <div class="single-pro-image">
        <img src={currentdata.image} width="100%" id="mainImg"alt=""/>
        <div class="small-img-group">
            <div class="small-img-col">
                <img src="f1.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="f2.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="f3.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="f4.jpg" width="100%" class="small-img" alt=""/>
            </div>
        </div>
    </div>
    <div class="single-pro-details">
<h6>home / T-shirt</h6>
<h4>Men's Fashion T shirts</h4>
<h2>$139.00</h2>
<select >
    <option>Select Size</option>
    <option>S</option>
    <option>M</option>
    <option>XL</option>
    <option>XXL</option>
</select>
<input type="number" value="1"/>
<button class="normal">Add To Cart</button>
<h4>Product Details</h4>
<span>{currentdata.details}</span>
    </div>
    
</section>

    </div>
  )
}

export default CrudDetails
