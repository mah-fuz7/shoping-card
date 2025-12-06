import React, { Suspense } from 'react'
import Products from './products/products'
const promiseApi=fetch('https://dummyjson.com/products')
.then(res=>res.json())
function App() {
  return (
    <div>
      <Suspense fallback={<h1>YOUR PRODUCT IS LOADING.........</h1>}>
      <Products promiseApi={promiseApi}></Products>
      </Suspense>
    </div>
  )
}

export default App