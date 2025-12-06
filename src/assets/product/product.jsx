import { useState } from 'react'
import './product.css'

export default function Product(products){
    const [add ,setAdd]=useState(false)
    const AddToCart=()=>{
        setAdd(!add)
    }
    const{images, price}=products.products
    console.log(products)
    return(
        <div className={` card ${add===false?'card':'added'}`}>
            <img src={images} alt=""  className="img"/>
            <h1>{products.products.title}</h1>
            <h5>{products.products.description}</h5>
            <h5>{`price:${price} $`}</h5>
            <button onClick={AddToCart} >{add===false?'Add To Cart':'Added'}</button>
        </div>
    )
}

