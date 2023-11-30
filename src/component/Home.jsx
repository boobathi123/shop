import React from 'react'
import '../App.css';
import Products from './Products';
export default function Home() {
  return (
    <div className='hero'>
        <div className="card bg-dark text-black border-0">
                <div className="card-img-overlay d-flex flex-column">
                <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW BRANDS HERE</h5>
                    <p className="card-text lead fs-2"> CHECK OUT YOUR PURCHASE WITH LOW BUDGET</p>
                </div>
            </div>  
        </div><br /><br /><br /><br />
        <Products/>
    </div>
      
  )
}
