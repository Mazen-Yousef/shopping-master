import React, { useState } from 'react';
import "../../css/Products/Products.css" ;
import ProductModal from './ProductModal';

 function Products(props) {
   const [product, setProduct] = useState("");
   const openModal = (hadi) => {
    setProduct(hadi)
   };
   const closeModal = ()=>{
    setProduct(false)

   }
  return ( <div className="products"> 
  
             { props.products.map( hadi => (

               <div key={hadi.id} className='productItem'>
                 <a href='#' onClick={()=>openModal(hadi)}>
                 <img src={hadi.imagesUrl} alt = {hadi.title} />
                 </a>
                   <div className='productInfo'>
                       <p>{hadi.title} </p>
                        <span>${hadi.prise}</span>
                   </div>
                   <button onClick={() => props.addToCart(hadi)}> Add To Cart</button>
                 
               </div>

             )

             )} 

            <ProductModal product={product} closeModal={closeModal}  />


             
           </div>);
}
export default Products