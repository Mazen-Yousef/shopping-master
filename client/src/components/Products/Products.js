import React, { useState , useEffect} from 'react';
import "../../css/Products/Products.css" ;
import ProductModal from './ProductModal';
import{connect} from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';




 function Products(props) {
   const [product, setProduct] = useState("");
   const openModal = (hadi) => {
    setProduct(hadi)
   };
   const closeModal = ()=>{
    setProduct(false)

   };

   useEffect(()=>{
     props.fetchProducts()
   },[]);



  return ( 
      

            <div className="products"> 
  
             {props.products && props.products.length ? props.products.map( hadi => (

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

             ) : "LOADING >>>"} 

            <ProductModal product={product} closeModal={closeModal}  />


             
           </div>
          
           
           
       
           );




}
export default connect((state)=>{
  return {
    products : state.products.productsByFilter
  }
}, {fetchProducts} )(Products) 