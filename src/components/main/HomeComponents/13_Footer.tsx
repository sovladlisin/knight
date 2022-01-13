import * as React from 'react';

import arrow_up from '../../../images/Icons/arrow-up.png'
import logo from '../../../images/1_Title/logo 2.png'
interface IFooterProps {
    onReturn: () => void
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return <>
        <div className='footer'>
            <div className='footer-container'>
                <span className='image-outer footer-logo'><img src={logo}></img></span>

                <div className='footer-contact'>
                    <p className='footer-contact-text'>ИП Крестинин К.И.</p>
                    <p className='footer-contact-text'>ИНН 745104702135</p>
                </div>
                <p className='footer-address'>Москва, 2021</p>
                <a className='footer-legal'>Политика конфиденциальности</a>
                <button onClick={_ => props.onReturn()} className='footer-return'><span className='image-outer footer-arrow'><img src={arrow_up}></img></span><p>Наверх</p></button>
            </div>
        </div>
    </>;
};

export default Footer;
