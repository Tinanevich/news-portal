import './styles.scss';
import routeMain from './routes';
import GirlImg from 'assets/img/girl-working.jpg'

const Contacts = () => (
    <section className='contactsPage'>
        <div className='info'>
            <div className='phone'>
                <a href='tel:+375336005475'>+ 375 (33) 600 54 75</a>
            </div>
            <div className='name'>
                Solo <br/> Andy
            </div>
            <div className='mail'>
                <a href='mailto:user@icloud.com'>user@icloud.com</a>
            </div>
            <div className='position'>
                FrontEnd Developer
            </div>
            <div className='technologies'>
                HTML CSS JS
            </div>
        </div>
        <div className='image'>
                <img src={GirlImg} alt={GirlImg}/>
        </div>
    </section>
)

export {routeMain};

export default Contacts;