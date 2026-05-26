import './App.css'
import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import ProductDetail from './components/products/ProductDetail'
import Cart from './components/cart/Cart'
function App() {

  return (
    <>
    <Routes> 
      <Route element={<Layout />}> 
        <Route path="/" element={<h1>Cristal Store</h1>} />
        <Route path="/products" element={<ProductList  />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
