import * as React from 'react';
import { isMobile } from 'react-device-detect';
import founder from '../../../images/10_Founder/founder.png'
import scroll from '../../../images/10_Founder/scroll.png'

interface IFounderProps {
}

const Founder: React.FunctionComponent<IFounderProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'founder-container' + mobile}>
            <div className={'founder-left' + mobile}>
                <h1 className={'founder-title' + mobile}>
                    Константин крестинин
                </h1>

                <div className={'founder-text' + mobile}>
                    <p className={'founder-text-item' + mobile}>
                        Создатель сервиса Втаргете, с помощью которого <br></br>
                        таргетологи делают тысячи регистраций в сутки<br></br>
                        на онлайн-проекты и онлайн-школы.<br></br>
                        За год работы сервиса все его пользователи сэкономили<br></br>
                        времени на 363 года.
                    </p>
                    <p className={'founder-text-item' + mobile}>
                        Директор в агентстве по трафику FAQTraffic, эффективно<br></br>
                        потратили более 300 млн. р. в VK на онлайн-школы,<br></br>
                        привели более 5 млн. подписчиков в рассыльщик.
                    </p>
                    <p className={'founder-text-item' + mobile}>
                        Директор в рассыльщике iSend.pro -- первом рассыльщике<br></br>
                        сообщений в сети Oднoклaccники.
                    </p>
                </div>
            </div>
            <span className={'image-outer founder-knight-1' + mobile}><img src={founder}></img></span>
            <p className={'founder-about-absolute-text' + mobile}>ОБ ОСНОВАТЕЛЕ КЛУБА</p>
            <span className={'image-outer founder-scroll-1' + mobile}><img src={scroll}></img></span>

        </div>
    </>;
};

export default Founder;
