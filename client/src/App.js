import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
import {Provider}from 'react-redux';
import store from "./redux/store/store";




function App() {
  const [products , setProducts] = useState(data);
  const [size , setSize] = useState("");
  const [order , setOrder] = useState("");
  const [cartItems , setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

// e ------------------



  const filterBySize = (e) => {
    
    setSize(e.target.value);

  let productsClone = [...data];
  let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) !== -1 );


    if(e.target.value === "ALL"){
      setProducts(data);
    } else {
      
           setProducts(newProducts);
    }
  
  };

  const filterByOrder = (e) => {

      setOrder(e.target.value);

      let productsClone = [...data];
     let newProducts = productsClone.sort(
        (a,b) => {
          if(e.target.value === "Lower"){
            return (a.prise-b.prise)
          } else if (e.target.value === "Highest"){
            return (b.prise-a.prise)
          } else {
           return (a.id < b.id ? 1 : -1) 
          }

        }
      );

      if(e.target.value === "ALL"){
        setProducts(data);
      } else {
        
             setProducts(newProducts);
      }

  };
  
  const addToCart = (product) => {
        const cartItemsClone =[ ...cartItems];
        let isProductExisting = false;
        cartItemsClone.forEach( p => {
          if(p.id === product.id){
            p.qty++;
            isProductExisting = true ;
          }})
          if(!isProductExisting){
            
             cartItemsClone.push({...product,qty:1})

              }
      setCartItems(cartItemsClone);
  };

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter( p => p.id !== product.id ));

  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems]);
  

  //-----------------------------

    
  

    return (
         <Provider store={store}>
            <div className="layout">
                <Header/>
                <main>
                <div className="wrapper">
                  <Products products={products} addToCart={addToCart} />
                  <Filter filterBySize={filterBySize} size={size} filterByOrder={filterByOrder} order={order} productsNumber={products.length}  />
                
                </div>
                  <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                </main>
                <Footer />

            </div>
         </Provider>
 
  
  );
}

export default App;
