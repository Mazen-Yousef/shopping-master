import React from 'react';
import Modal from 'react-modal';



 function OrderModal(props) {
     const {order,closeModal,cartItems} = props;
  return (
     <>
    {
        order && <Modal isOpen={order} onRequestClose={closeModal}>
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
                                <td>{cartItems.reduce((a,b)=>{
                                    return a + b.prise
                                },0)}</td>
                            </tr>
                            <tr>
                                <td> selected Items:</td>
                                <td>{cartItems.map((p)=>(
                                        <div className='cart_data'>
                                            <p>Number of this Product {p.qty} </p>
                                            <p>Title of this Product {p.title} </p>
                                        </div>
                                ))}</td>
                            </tr>
                        </table>
                
                    </div>
    
                 </Modal>
    }
     </>
  )
}
export default OrderModal