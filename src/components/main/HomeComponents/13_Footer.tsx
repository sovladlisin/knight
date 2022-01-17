import * as React from 'react';

import arrow_up from '../../../images/Icons/arrow-up.png'
import { isMobile } from 'react-device-detect';
import logo from '../../../images/1_Title/logo 2.png'
interface IFooterProps {
    onReturn: () => void
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'footer' + mobile}>
            <div className={'footer-container' + mobile}>
                <span className={'image-outer footer-logo' + mobile}><img src={logo}></img></span>

                <div className={'footer-contact' + mobile}>
                    <p className={'footer-contact-text' + mobile}>ИП Крестинин К.И.</p>
                    <p className={'footer-contact-text' + mobile}>ИНН 745104702135</p>
                </div>
                <p className={'footer-address' + mobile}>Москва, 2021</p>
                <a className={'footer-legal' + mobile}>Политика конфиденциальности</a>
                <button onClick={_ => props.onReturn()} className={'footer-return' + mobile}><span className={'image-outer footer-arrow' + mobile}><img src={arrow_up}></img></span><p>Наверх</p></button>
            </div>
        </div>
    </>;
};

export default Footer;
