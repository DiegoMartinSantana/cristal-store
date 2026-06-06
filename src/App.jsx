import './App.css'
import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import ProductDetail from './components/products/ProductDetail'
import Cart from './components/cart/Cart'
import  ProductContainer  from './components/products/addProduct/ProductContainer'
import NotFound from './components/NotFound'
import Home from './components/home/home'
function App() {

  return (
    <>
    <Routes> 
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList  />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<ProductContainer />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App;
