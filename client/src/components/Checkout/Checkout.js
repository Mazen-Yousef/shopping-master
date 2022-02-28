import React from 'react'
import '../../css/Checkout/Checkout.css'
import Input from '../Input/Input';

 function Checkout(props) {
  return (
    <>
            {props.showForm &&         <div className='checkoutForm'>
            <form onSubmit={props.submitOrder}>
                <Input
                    label = "Name"
                    type = "text"
                    name = "name"
                    onChange ={props.handleChange} />

                <Input
                    label = "Email"
                    type = "email"
                    name = "email"
                    onChange ={props.handleChange} />




                <button type="submit"> CHECKOUT </button>

            </form>
            <span className='close-icon' onClick={() => props.setShowForm(false)}> &times;</span>

        </div>}

    </>
  )
}

export default Checkout;
