import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return (
    <Carousel interval={10000}>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 imgHero3"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero2Mobile.jpg?alt=media&token=4cb2bbe6-1b10-4e1b-a40e-31911921aa98'
            alt="Third-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Ver Yerbas' to='/categoria/yerbas'  />
          </Carousel.Caption>
        </Carousel.Item> 
      
      
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero1Mobile.jpg?alt=media&token=464481d1-1d29-44aa-8bcf-f5a17a24ea7b'
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Comprar' to='/productos' />
          </Carousel.Caption>
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero1.jpg?alt=media&token=403b9243-1506-4708-8c4e-bb1acc5b3a4c'
            alt="Second-slide"
          />
          <Carousel.Caption className='HeroCaption hero3'>
            <Button label='Ver Mates' to='/categoria/mates'  />
          </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    );
}
export default Hero1