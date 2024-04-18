import React from 'react'
import { useState, useEffect } from 'react'
import './Admin.css'
import { collection, addDoc, setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL, listAll, list } from "firebase/storage";
import { db } from '../../services/firebase/firebaseConfig'
import { storage } from '../../services/firebase/firebaseConfig'
import Swal from 'sweetalert2';


export const Admin = () => {
    const [image1, setImg1] = useState(null);
    const [image2, setImg2] = useState(null);
    const [category, setCategory] = useState('mates');
    const [nombre, setNombre] = useState('');
    const [imagePreview1, setImagePreview1] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
    }

    const handleImage1Change = (e) => {
        const file = e.target.files[0];
        setImg1(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview1(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const handleImage2Change = (e) => {
        const file = e.target.files[0];
        setImg2(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview2(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const addProduct = async (e) => {
        e.preventDefault();
        // Crear una referencia a la carpeta del producto
        const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
        const productFolderRef = ref(storage, `Productos/${capitalizedCategory}/${nombre}`);

        let imageUrl1 = '';
        if (image1) {
            const image1Ref = ref(productFolderRef, image1.name);
            await uploadBytesResumable(image1Ref, image1);
            imageUrl1 = await getDownloadURL(image1Ref);
        }
        let imageUrl2 = '';
        if (image2) {
            const image2Ref = ref(productFolderRef, image2.name);
            await uploadBytesResumable(image2Ref, image2);
            imageUrl2 = await getDownloadURL(image2Ref);
        }
        const precio = parseInt(document.getElementById('precio').value)
        const descuento = parseInt(document.getElementById('descuento').value)
        const stock = document.getElementById('stock').checked;
        const descripcion = document.getElementById('descripcion').value;
        const nombreProducto = nombre.replace(/\s+/g, '-');
        const nuevoProducto = {
            nombre: nombre,
            precio: precio,
            descuento: descuento,
            stock: stock,
            categoria: category,
            descripcion: descripcion,
            img1: imageUrl1,
            img2:  imageUrl2
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
                    <input type="text" id="nombre" name="nombre" required value={nombre} onChange={handleNombre} />
                    <label htmlFor="stock">Stock:</label>
                    <input type="checkbox" id="stock" name="stock" className='stock' />
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
                    <select name="category" id="category" required value={category} onChange={handleCategory}>
                        <option value="mates">Mates</option>
                        <option value="yerbas">Yerbas</option>
                        <option value="bombillas">Bombillas</option>
                        <option value="termos">Termos</option>
                        <option value="materas">Materas</option>
                        <option value="combos">Combos</option>
                    </select>

                </div>
                <label htmlFor="imagen">Imagen 1:</label>
                <input type="file" id="img1" name="imagen1" onChange={handleImage1Change}/>
                {imagePreview1 && <img src={imagePreview1} alt="Preview" style={{ maxWidth: '100px' }} />}
                <label htmlFor="imagen">Imagen 2:</label>
                <input type="file" id="img2" name="imagen2"  onChange={handleImage2Change}/>
                {imagePreview2 && <img src={imagePreview2} alt="Preview" style={{ maxWidth: '100px' }} />}
                <button className="Button" type='submit'>Agregar</button>
                
            </form>
        </div>
    )
}

export default Admin
