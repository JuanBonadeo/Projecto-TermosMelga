import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return (
      <Carousel interval={5000000}>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src=' https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero0.jpg?alt=media&token=67bfb9f2-2cf8-48eb-88d8-659ad0edfb8e '
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Comprar' to='/productos' />
          </Carousel.Caption>
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero1.jpg?alt=media&token=a284a4d1-5920-4a8a-92d2-c72c868a86a2'
            alt="Second-slide"
          />
          <Carousel.Caption className='HeroCaption hero3'>
            <Button label='Ver Mates' to='/categoria/mates'  />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 imgHero3"
            src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero2black.jpg?alt=media&token=197fcb10-b6bd-4afa-86eb-d56a98fbbac2'
            alt="Third-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Ver Yerbas' to='/categoria/yerbas'  />
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
}
export default Hero1