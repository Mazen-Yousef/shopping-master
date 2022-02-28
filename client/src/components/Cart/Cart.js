import React, { useState } from 'react'

import "../../css/Cart/Cart.css"
import Checkout from '../Checkout/Checkout'


function Cart(props) {

    const submitOrder = (e)=>{
        e.preventDefault()
        const order ={
            name:value.name,
            email:value.email
        }
        console.log(order)

    }
    const [value ,setValue] = useState("");

    const handleChange = (e) => {

    setValue((prevState)=>({...prevState , [e.target.name]: e.target.value}))

    }


    const [showForm,setShowForm] = useState(false)


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
        {
            props.cartItems.length !== 0 &&
            <div className='cartFooter'>
            <div className='totalPrise'> Total Prise : { props.cartItems.reduce((acc,i)=>{
                return (acc + i.prise * i.qty)

            },0)
            } $ </div>
            <button onClick={() => {setShowForm(true)}}> select Products </button>
        </div>
        }
        {/*checkout form */}
        <Checkout submitOrder={submitOrder} showForm={showForm} setShowForm={setShowForm} handleChange={handleChange}  />


   
    </div>
  )
}

export default Cart
