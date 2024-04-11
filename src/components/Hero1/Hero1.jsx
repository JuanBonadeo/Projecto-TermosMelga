import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () => {
  return (
    <Carousel interval={5000}>


      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1"
          src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero1.jpg?alt=media&token=0bb247f1-2ce9-431e-9fe7-b1dc2d8237ab'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label='Comprar' to='/productos' />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero2.jpg?alt=media&token=00d11485-5ebd-4c96-b442-9b5c6ba2e59d'
          alt="Third-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label='Ver Yerbas' to='/categoria/yerbas' />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1"
          src='https://firebasestorage.googleapis.com/v0/b/termomelga.appspot.com/o/heros%2Fhero3.jpg?alt=media&token=9e27c755-c246-4b86-b8d9-25b2d4401825'
          alt="Second-slide"
        />
        <Carousel.Caption className='HeroCaption hero3'>
          <Button label='Ver Mates' to='/categoria/mates' />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Hero1