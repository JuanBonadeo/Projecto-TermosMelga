import '../ColorPicker/colorPicker.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

 const ColorPicker = (colors) => {
    
    return (
        <div className="colorContainer">
            <h5>Color: {color}</h5>
            <div className='colors'>
                {colors.map((color) => (
                    <button key={color.id} onClick={() => handleColor(color.id)}>
                <div className={color.color}></div>
            </button>
      ))}
    </div>
  </div>
    )
 }
 export default ColorPicker