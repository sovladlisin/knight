import * as React from 'react';
import founder from '../../../images/10_Founder/founder.png'
import scroll from '../../../images/10_Founder/scroll.png'

interface IFounderProps {
}

const Founder: React.FunctionComponent<IFounderProps> = (props) => {
    return <>
        <div className='founder-container'>
            <div className='founder-left'>
                <h1 className='founder-title'>
                    Константин крестинин
                </h1>

                <div className='founder-text'>
                    <p className='founder-text-item'>
                        Создатель сервиса Втаргете, с помощью которого <br></br>
                        таргетологи делают тысячи регистраций в сутки<br></br>
                        на онлайн-проекты и онлайн-школы.<br></br>
                        За год работы сервиса все его пользователи сэкономили<br></br>
                        времени на 363 года.
                    </p>
                    <p className='founder-text-item'>
                        Директор в агентстве по трафику FAQTraffic, эффективно<br></br>
                        потратили более 300 млн. р. в VK на онлайн-школы,<br></br>
                        привели более 5 млн. подписчиков в рассыльщик.
                    </p>
                    <p className='founder-text-item'>
                        Директор в рассыльщике iSend.pro -- первом рассыльщике<br></br>
                        сообщений в сети Oднoклaccники.
                    </p>
                </div>
            </div>
            <span className='image-outer founder-knight-1'><img src={founder}></img></span>
            <p className='founder-about-absolute-text'>ОБ ОСНОВАТЕЛЕ КЛУБА</p>
            <span className='image-outer founder-scroll-1'><img src={scroll}></img></span>

        </div>
    </>;
};

export default Founder;
