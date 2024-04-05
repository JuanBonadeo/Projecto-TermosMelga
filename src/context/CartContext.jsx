import { createContext, useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2'


export const CartContext = createContext([])
 export const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || []
    const [cart, setCart] = useState(initialCart)
      // Actualizar localStorage cada vez que cambia el carrito
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const addItem = (productToAdd) => {
      const { id, nombre, precio, quantity, img1, img2, img3, descuento, stock } = productToAdd;
      if (!isInCart(id)) {
        const newProduct = { id, nombre, precio, quantity, img1, img2, img3, descuento, stock };
        setCart(prev => [...prev, newProduct]);
        Toast.fire({
          icon: 'success',
          title: `${nombre} ha sido agregado al carrito`
        });
      } else {
        const updatedCart = cart.map(prod => {
          if (prod.id === id && prod.quantity < 10) {
            return {
              ...prod,
              quantity: prod.quantity + 1
            };
          } else {
            return prod;
          }
        });
        setCart(updatedCart);
        Toast.fire({
          icon: 'success',
          title: `${nombre} agregado al carrito`
        });
      }
    }
     const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        Toast.fire({
          icon: "info",
          title: `eliminado`
        })
    }   
    const updateQuantity = (id, addedQuantity) => {
      const updatedCart = cart.map(prod => {
        if (prod.id === id && prod.quantity + addedQuantity <= 10) {
          const newQuantity = prod.quantity + addedQuantity;
          if (newQuantity <= 0) {
            Toast.fire({
              icon: "info",
              title: `eliminado`
            })
            return null;
          } else {
            return {
              ...prod,
              quantity: newQuantity
            };
          }
        } else {
          return prod;
        }
      }).filter(Boolean); // Remove any null values from the updatedCart array
      setCart(updatedCart);
    }
    const updateQuantitySelect = (id, newQuantity) => {
      const updatedCart = cart.map(prod => {
        if (prod.id === id) {
          return {
            ...prod,
            quantity: newQuantity
          };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    }
    const formatearMoneda = (cantidad) => {
      const formatoMonedaArgentina = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
      });
    
      return formatoMonedaArgentina.format(cantidad);
    }
    const calcularDescuento = (precio, descuento) => {
      return formatearMoneda(precio - (precio * descuento / 100))
    }
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            let totP = (prod.precio - (prod.precio * prod.descuento / 100)) * prod.quantity
            total += totP
          })

        return total
    }

    const total = getTotal()


    const clearCart = () => {
        
        Swal.fire({
          title: '¿Deseas limpiar el carrito?',
          showCancelButton: true,
          confirmButtonText: 'Limpiar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            Toast.fire('',"carrito limpio", 'info')
            setCart([])
          }
        })
    }
    
    


    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart, updateQuantity,updateQuantitySelect, formatearMoneda, calcularDescuento }}>
            { children }
        </CartContext.Provider>
    )
}
