import React from 'react';
import "../../css/Products/Products.css" ;

 function products(props) {
  return ( <div className="products"> 
  
             { props.products.map( product => (

               <div key={product.id} className='productItem'>
                   <img src={product.imagesUrl} alt = {product.title} />
                   <div className='productInfo'>
                       <p>{product.title} </p>
                        <span>{product.prise}</span>
                   </div>
                   <button> Add To Cart</button>
                 
               </div>

             )

             )} 

             
           </div>);
}
export default products