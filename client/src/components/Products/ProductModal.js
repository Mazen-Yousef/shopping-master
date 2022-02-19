import React from 'react';
import Modal from 'react-modal';


function ProductModal(props) {
    const {product , closeModal} = props;
  return (
    
    <Modal isOpen={product} onRequestClose={closeModal}>
    <span className='close-icon' onClick={closeModal}> &times;</span>

   <div className='product-details'>
   <img src={product.imagesUrl} alt = {product.title} />
   <p>{product.desc} </p>
   <p>${product.prise}</p>
   <p>{product.title} </p>

   </div>

  </Modal>
  );
}
export default ProductModal;