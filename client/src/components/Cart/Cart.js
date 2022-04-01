import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkout from '../Checkout/Checkout'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import { removeCart } from '../../redux/actions/ac_cart';
import OrderModal from './OrderModal';
import { clearOrder, createOrder } from '../../redux/actions/ac_order';
import { words } from '../../words';


function Cart(props) {

    const [showForm,setShowForm] = useState(false);

    const submitOrder = (e)=>{
        e.preventDefault()
        const order ={
            name:value.name,
            email:value.email
        }
       props.createOrder(order);

    }
    const closeModal = ()=>{
        props.clearOrder();
        setShowForm(false);
        
        
    }

    const [value ,setValue] = useState("");

    const handleChange = (e) => {

    setValue((prevState)=>({...prevState , [e.target.name]: e.target.value}))

    }


  return (
    <div className='cart_wrapper'>
        <div className='cart_empty'>{props.cartItems.length === 0 ? <Fade top cascade text>
            <h4>{words.cartEmpty}</h4></Fade>  : <h5> 
             {words.productsNumber} : {props.cartItems.length} </h5>}</div>
        {/*Modal*/}
        <OrderModal cartItems={props.cartItems} closeModal={closeModal} order={props.order} ></OrderModal>

        <div className='cart_items'>
            {props.cartItems.map(i => (
                            <div className='cart_item' key={i.id}>
                            <img src={i.imagesUrl} alt={i.title} />
                            <div className='cart_info'>
                                <div>
                                    <p>{words.cartTitle}:{i.title}</p>
                                    <p>{words.cartQty}:{i.qty}</p>
                                    <p>{words.cartPrise}:{i.prise}$</p>
                                </div>
                                <button onClick={()=>{props.removeCart(i)}}>
                                    {words.removeItem}
                                </button>
                            </div>
                        </div>
            ))}



        </div>
        {
            props.cartItems.length !== 0 &&
            <div className='cartFooter'>
            <div className='totalPrise'> {words.cartTotalPrise} : { props.cartItems.reduce((acc,i)=>{
                return (acc + i.prise * i.qty)

            },0)
            } $ </div>
            <button onClick={() => {setShowForm(true)}}> {words.selectProducts} </button>
            </div>
        }
        {/*checkout form */}
        <Checkout submitOrder={submitOrder} showForm={showForm} setShowForm={setShowForm} handleChange={handleChange}  />


   
    </div>
  )
}

export default connect((state)=>{
    return{
        order:state.order.order,
        cartItems:state.cart.cartItems
    }

}, {removeCart,createOrder,clearOrder}  )(Cart) 
