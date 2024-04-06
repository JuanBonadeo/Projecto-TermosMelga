import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import './productsContainer.css'
import { db } from '../../services/firebase/firebaseConfig'
import ProductList from './ProductList'
import { Loader } from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import OrderList from '../Order/Order'




export default function ProductsContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();
  const fetchProducts = async () => {
    setLoading(true)
    try {
      let productsRef = categoryId
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
        : collection(db, 'products');
      const snapShot = await getDocs(productsRef);
      const productosAdapted = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productosAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  if (loading) {
    return <Loader/>;
  }
  if(products.length === 0){
    return <h1 className='noProducts'>No hay productos disponibles</h1>
  } 
  if(categoryId){
    return (
      <>
      <div className='h1Order h1OrderCategory'>
        <h1>Nuestros {categoryId}</h1>
        <OrderList handleOrderChange={handleOrderChange}/>
      </div>
      <ProductList products={products} orderBy={orderBy}/>
      </>
    )
  }
  return (
    <>
    <div className='h1Order'>
      <h1>Nuestros Productos</h1>
      <OrderList handleOrderChange={handleOrderChange}/>
    </div>
    <ProductList products={products} orderBy={orderBy}/>
    </>
      
  )
}
