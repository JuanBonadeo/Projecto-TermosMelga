import React from 'react'
import '../Hero2/hero2.css'
import Button from '../Button/Button'

export const Hero2 = () => {
  return (
    <div className="CombosContainer">
      <img src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fcombos.jpg?alt=media&token=45a636ef-aacb-47d5-af51-453e0d17176a' alt='Combos' className='combosImg'/>
      <div className="info">
        <h2>Encarga uno de nuestros Combos!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus ratione sunt itaque adipisci ipsam. Nesciunt adipisci accusamus, 
          quod non velit voluptatem ipsam praesentium quia culpa officia ea nemo commodi earum!</p>
          

          <Button label='Ver Combos' to='/categoria/mates'  />
      </div>
    </div>
  )
}
