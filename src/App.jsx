import './App.css'
import { useEffect } from 'react'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/NavBar/NavBar'
import HomeView from './components/HomeView/HomeView'
import WspButton from './components/WspButton/WspButton'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import ProductInfoView from './components/ProductInfo/ProudctInfoView'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import FinishPurchase from './components/FinishPurchase/FinishPurchase'
import Admin from './components/Admin/Admin'
import GraciasXtuCompra from './components/GraciasXtuCompra/GraciasXtuCompra'

function App() {
  useEffect(() => {
    window.scrollTo(-10, -10);
  }, []);
  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
      <Header/> 
      <div className="contain">
        <Routes>
          <Route path="/" element={<HomeView/>}/>
            <Route path="/categoria/:categoryId" element={<ProductsContainer/>}/>
            <Route path="/producto/:productId" element={<ProductInfoView/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/productos" element={<ProductsContainer/>}/>
          <Route path="/checkout" element={<FinishPurchase/>}/>
          <Route path='/admin123' element={<Admin/>}/>
          <Route path='/gracias' element={<GraciasXtuCompra/>}/>
          
        </Routes>  
      </div>
      <WspButton/>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
