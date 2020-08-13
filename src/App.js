import React, { useState, useEffect } from 'react';
import dataFake from './dataFake';
import Routers from './routers'
import apiRequest from './api/productApi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  // xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  //them san pham
  const onHandleAdd = async (product) => {
    //console.log(product)
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleUpdate = async (id, product) => {
    const {data} = await apiRequest.update(id, product);
    const newProducts = products.map(product => (
      product.id === data.id ? data : product 
    ));
    setProducts(newProducts);
  }
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}/>
    </div>
  )

}
export default App;