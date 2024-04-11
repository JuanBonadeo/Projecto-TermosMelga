import React from 'react'
import './Admin.css'
import { collection, addDoc, setDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import Swal from 'sweetalert2';


export const Admin = () => {
    const addProduct = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const descuento = document.getElementById('descuento').value;
        const stock = document.getElementById('stock').checked;
        const category = document.getElementById('category').value;
        const descripcion = document.getElementById('descripcion').value;
        const img1 = document.getElementById('img1').value;
        const img2 = document.getElementById('img2').value;
        const nombreProducto = nombre.toUpperCase().replace(/\s+/g, '-');
        const nuevoProducto = {
            nombre: nombre,
            precio: precio,
            descuento: descuento,
            stock: stock,
            category: category,
            descripcion: descripcion,
            img1: img1,
            img2: img2
        }
         // Replace 'your-desired-id' with the desired ID for the document
        const productRef = doc(db, 'products', nombreProducto);
        setDoc(productRef, nuevoProducto)
        
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al agregar producto',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        
    }
    return (
        <div className="adminContainer">
            <form className="adminForm" onSubmit={(e) => { e.preventDefault(); addProduct(e); }}>
                <h1>Administrar Productos</h1>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                    <label htmlFor="stock">Stock:</label>
                    <input type="checkbox" id="stock" name="stock"  className='stock'/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="precio" name="precio" required />
                    <label htmlFor='descuento'>Descuento:</label>
                    <select name="descuento" id="descuento" required>
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                        <option value="30">30%</option>
                        <option value="35">35%</option>
                        <option value="40">40%</option>
                        <option value="45">45%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <input type="text" id="descripcion" name="descripcion" />
                    <label htmlFor="category">Categoría:</label>
                    <select name="category" id="category" required>
                        <option value="mates">Mates</option>
                        <option value="yerbas">Yerbas</option>
                        <option value="bombillas">Bombillas</option>
                        <option value="termos">Termos</option>
                        <option value="materas">Materas</option>
                        <option value="combos">Combos</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">Imagen 1:</label>
                    <input type="text" id="img1" name="imagen1" />
                    <label htmlFor="imagen">Imagen 2:</label>
                    <input type="text" id="img2" name="imagen2" />
                </div>
                <button className="Button" type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default Admin
