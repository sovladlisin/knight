import * as React from 'react';



import B_CALENDAR from '../../../images/1_Title/bottom-calendar.png'
import B_MONEY from '../../../images/1_Title/bottom-money.png'
import B_PEOPLE from '../../../images/1_Title/bottom-people.png'
import KNIGHT from '../../../images/1_Title/knight.png'
import FLAG from '../../../images/1_Title/flag.png'
import L_CALENDAR from '../../../images/1_Title/list-calendar.png'
import L_COIN from '../../../images/1_Title/list-coin.png'
import L_PEOPLE from '../../../images/1_Title/list-people.png'
import LOGO from '../../../images/1_Title/logo 1.png'
import { isMobile } from 'react-device-detect';
interface ITitleProps {
}

const Title: React.FunctionComponent<ITitleProps> = (props) => {

    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'title-bar' + mobile}>
            <div className={'title-bar-inner' + mobile}>
                <div className={'logo' + mobile}>
                    <span className={'image-outer' + mobile}><img src={LOGO}></img></span>

                </div>
                <h1>
                    Закрытый клуб богатых таргетологов “Таргетрон”
                </h1>
                <h2 className={'title-h2' + mobile}>Здесь ты получишь все, чтобы:</h2>
                <div className={'title-list' + mobile}>
                    <div className={'title-list-item' + mobile}>
                        <span className={'image-outer title-list-item-icon' + mobile}><img src={L_COIN}></img></span>
                        <p className={'title-list-item-text' + mobile}>Выйти на стабильные 100 тыс. р. в месяц</p>
                    </div>
                    <div className={'title-list-item' + mobile}>
                        <span className={'image-outer title-list-item-icon' + mobile}><img src={L_CALENDAR}></img></span>
                        <p className={'title-list-item-text' + mobile}>Начать работать до 6 часов в день и все успевать</p>
                    </div>
                    <div className={'title-list-item' + mobile}>
                        <span className={'image-outer title-list-item-icon' + mobile}><img src={L_PEOPLE}></img></span>
                        <p className={'title-list-item-text' + mobile}>Найти клиентов, которые готовы стабильно платить по 20-35 тысяч за проект</p>
                    </div>
                </div>

                <a href={'https://vk.com/app5898182_-207041967#s=1514406'} target="_blank" rel="noopener noreferrer"><button className={'title-button' + mobile}>ВСТУПИТЬ В КЛУБ</button></a>


                <span className={'image-outer title-flag' + mobile}><img src={FLAG}></img></span>
                {!isMobile && <div className={'image-outer title-knight' + mobile}><img src={KNIGHT}></img></div>}
                {isMobile && <div className={'image-outer title-knight' + mobile}><img src={KNIGHT}></img></div>}


            </div>
        </div>
        <div className={'title-bottom-bar' + mobile}>
            <div className={'title-bottom-bar-item' + mobile}>
                <span className={'image-outer title-bottom-bar-item-img' + mobile}><img src={B_CALENDAR}></img></span>
                <div className={'title-bottom-bar-item-text' + mobile}>
                    <p className={'title-bottom-bar-item-text-top' + mobile}>4.5 месяца</p>
                    <p className={'title-bottom-bar-item-text-bottom' + mobile}>Существует клуб</p>
                </div>
            </div>
            <div className={'title-bottom-bar-item' + mobile}>
                <span className={'image-outer title-bottom-bar-item-img' + mobile}><img src={B_PEOPLE}></img></span>
                <div className={'title-bottom-bar-item-text' + mobile}>
                    <p className={'title-bottom-bar-item-text-top' + mobile}>113 участников</p>
                    <p className={'title-bottom-bar-item-text-bottom' + mobile}>На данный момент</p>
                </div>
            </div>
            <div className={'title-bottom-bar-item' + mobile}>
                <span className={'image-outer title-bottom-bar-item-img' + mobile}><img src={B_MONEY}></img></span>
                <div className={'title-bottom-bar-item-text' + mobile}>
                    <p className={'title-bottom-bar-item-text-top' + mobile}>1 500 000 р.</p>
                    <p className={'title-bottom-bar-item-text-bottom' + mobile}>Заработано участниками</p>
                </div>
            </div>


        </div>

    </>;
};

export default Title;
