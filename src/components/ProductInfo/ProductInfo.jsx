import React from 'react'
import { useEffect, useState, useContext } from 'react'
import './productInfo.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../Button/Button';
import Carousel from 'react-bootstrap/esm/Carousel'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { CartContext } from '../../context/CartContext';
import { motion } from 'framer-motion';
import AddToCartIcon from '../AddtoCartBtn.js/AddToCartBtn';
import ColorPicker from '../ColorPicker/ColorPicker';



export default function ProductInfo({ id, nombre, precio, img1, img2, img3, descripcion, descuento = 0, categoria, colors }) {

  const [index, setIndex] = useState(0);
  const [indexColor, setIndexColor] = useState(0);
  const [color, setColor] = useState(colors[indexColor]?.color || '');
  const handleColor = (index) => {
    setIndexColor(index)
    setColor(colors[index].color)
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const useCart = () => {
    return useContext(CartContext)
  }
  let img = colors[indexColor].img1
  const { addItem, quantity, formatearMoneda, calcularDescuento } = useCart();
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, nombre, precio, quantity, img, descuento, color, indexColor
    }
    addItem(productToAdd)
  }
  const nuevoPrecio = calcularDescuento(precio, descuento)
  return (
    <>
      <div className='productInfoContainer'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .7, ease: "easeInOut", type: "spring", delay: .6 }}
          className="information">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <ColorPicker colors={colors} color={color} action={handleColor} />

          {descuento !== 0 && (
            <div className="priceAddto">
              <h5>
                Precio: <span className="price">{formatearMoneda(precio)}</span>
                <span className="discountedPrice">{nuevoPrecio}</span>
              </h5>
              <AddToCartIcon onAdd={handleOnAdd} />
            </div>
          )}
          {descuento === 0 && (
            <div className="priceAddto">
              <h5>Precio: {formatearMoneda(precio)}</h5>
              <AddToCartIcon onAdd={handleOnAdd} />
            </div>
          )}

          <h5>Categoria: {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h5>
          
          <div className="envios"><h5>Envios a Todo el Pais </h5><LocalShippingIcon /></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6, type: "tween" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
            {colors[indexColor].img1 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={colors[indexColor].img1} alt="Product" />
              </Carousel.Item>
            )}
            {colors[indexColor].img2 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={colors[indexColor].img2} alt="Product" />
              </Carousel.Item>
            )}
            {colors[indexColor].img3 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={colors[indexColor].img3} alt="Product" />
              </Carousel.Item>
            )}
          </Carousel>
        </motion.div>
      </div>

    </>

  )
}
