import '../Footer/footer.css'
import Logo from '../Logo/Logo.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className='footer1'>

                <div className='footerLinks'>
                    <Link to="https://wa.me/543412524906" className="dark" label="Atencion al Cliente">Atencion al Cliente</Link>
                    <Link to='https://www.instagram.com/termosmelga/'className="dark" label="Preguntas Frecuentes">Preguntas Frecuentes</Link>
                    <Link className="dark" label="Terminos & Condiciones">Terminos & Condiciones</Link>
                    <Link to="https://wa.me/543412524906" className="dark" label="Quienes Somos">Quienes Somos</Link>
                </div>
                <div className="logoMap">
                    <Logo className='logo light' />
                    <div className="mapa">
                        <h5>Encontranos en:</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3348.3542964624935!2d-60.65760422433042!3d-32.94165417359529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDU2JzMwLjAiUyA2MMKwMzknMTguMSJX!5e0!3m2!1ses!2sar!4v1712938720163!5m2!1ses!2sar"
                            width="200"
                            height="200"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='footer2'>
                <a href='https://www.instagram.com/termosmelga/'><InstagramIcon /></a>
                <a><FacebookIcon /></a>
                <a href='https://github.com/JuanBonadeo'><GitHubIcon /></a>
                <a ><LinkedInIcon /></a>
            </div>
            <h5>©TermosMelga Copyright  todos los derechos reservados</h5>
            <h5>Develop by:   <a>JuanBonadeo</a></h5>


        </footer>
    )
}
export default Footer