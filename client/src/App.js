import { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";



function App() {
  const [products , setProducts] = useState(data);
  const [size , setSize] = useState("");
  const [order , setOrder] = useState("");

// e ------------------

  const filterBySize = (e) => {
    
    setSize(e.target.value);

  let productsClone = [...data];
  let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) != -1 );


    if(e.target.value == "ALL"){
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
          if(e.target.value == "Lower"){
            return (a.prise-b.prise)
          } else if (e.target.value == "Highest"){
            return (b.prise-a.prise)
          } else {
           return (a.id < b.id ? 1 : -1) 
          }

        }
      );

      if(e.target.value == "ALL"){
        setProducts(data);
      } else {
        
             setProducts(newProducts);
      }

  }

    
  

    return (
    <div className="layout">
        <Header/>
        <div className="wrapper">
          <Products products={products} />
          <Filter filterBySize={filterBySize} size={size} filterByOrder={filterByOrder} order={order}  />
        </div>
        <Footer />

    </div>
  );
}

export default App;
