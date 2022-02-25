import React from 'react'

import "../../css/Cart/Cart.css"


function Cart(props) {
  return (
    <div className='cart_wrapper'>
        <div className='cart_empty'>{props.cartItems.length === 0 ? <h4>Cart Empty</h4> : <h5> 
            There are {props.cartItems.length} products in cart</h5>}</div>
        <div className='cart_items'>
            {props.cartItems.map(i => (
                            <div className='cart_item' key={i.id}>
                            <img src={i.imagesUrl} alt={i.title} />
                            <div className='cart_info'>
                                <div>
                                    <p>Title:{i.title}</p>
                                    <p>Qty:{i.qty}</p>
                                    <p>Prise:{i.prise}$</p>
                                </div>
                                <button onClick={()=>{props.removeFromCart(i)}}>
                                    remove
                                </button>
                            </div>
                        </div>
            ))}

        </div>
   
    </div>
  )
}

export default Cart
