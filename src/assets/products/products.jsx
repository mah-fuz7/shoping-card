import { use } from "react"
import "./products.css"
import Product from "../product/product"
export default function Products({promiseApi}){
    const products=use(promiseApi)
    console.log(products)
    return(
        <div >
        <h1 className="header">aaZ</h1>
       <h4 className="sub-header">you find what you want</h4>
       <main className="main grid">
        {
       products.products.map(products=><Product products={products}></Product>)
      
        }
         </main>
        </div>
    )
}