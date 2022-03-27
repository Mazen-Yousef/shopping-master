import React, { useState } from 'react'

import "../../css/Cart/Cart.css"
import Checkout from '../Checkout/Checkout'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import { removeCart } from '../../redux/actions/ac_cart';
import Modal from 'react-modal';



function Cart(props) {
    const [order,setOrder]= useState(false);

    const submitOrder = (e)=>{
        e.preventDefault()
        const order ={
            name:value.name,
            email:value.email
        }
        setOrder(order)

    }
    const closeModal = ()=>{
        setOrder(false)
    }

    const [value ,setValue] = useState("");

    const handleChange = (e) => {

    setValue((prevState)=>({...prevState , [e.target.name]: e.target.value}))

    }


    const [showForm,setShowForm] = useState(false);

    


  return (
    <div className='cart_wrapper'>
        <div className='cart_empty'>{props.cartItems.length === 0 ? <Fade top cascade text><h4>Cart Empty</h4></Fade>  : <h5> 
            There are {props.cartItems.length} products in cart</h5>}</div>
        {/*Modal*/}
        <Modal isOpen={order} onRequestClose={closeModal}>
            <div className='order_info'>
            <span className='close-icon' onClick={closeModal}> &times;</span>
                <p className='order_success'>Order Done</p>
                <table>
                    <tr>
                        <td> Name:</td>
                        <td>{order.name}</td>
                    </tr>
                    <tr>
                        <td> Email:</td>
                        <td>{order.email}</td>
                    </tr>
                    <tr>
                        <td> Total:</td>
                        <td>{props.cartItems.reduce((a,b)=>{
                            return a + b.prise
                        },0)}</td>
                    </tr>
                    <tr>
                        <td> selected Items:</td>
                        <td>{props.cartItems.map((p)=>(
                                <div className='cart_data'>
                                    <p>Number of this Product {p.qty} </p>
                                    <p>Title of this Product {p.title} </p>
                                </div>
                        ))}</td>
                    </tr>
                </table>

            </div>

        </Modal>

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
                                <button onClick={()=>{props.removeCart(i)}}>
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

export default connect((state)=>{
    return{
        cartItems:state.cart.cartItems
    }

}, {removeCart} )(Cart) 
