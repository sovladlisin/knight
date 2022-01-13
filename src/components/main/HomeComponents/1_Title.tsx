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
interface ITitleProps {
}

const Title: React.FunctionComponent<ITitleProps> = (props) => {
    return <>
        <div className='title-bar'>
            <div className='title-bar-inner'>
                <div className='logo'>
                    <span className='image-outer'><img src={LOGO}></img></span>

                </div>
                <h1>
                    Закрытый клуб богатых таргетологов “Таргетрон”
                </h1>
                <h2 className='title-h2'>Здесь ты получишь все, чтобы:</h2>
                <div className='title-list'>
                    <div className='title-list-item'>
                        <span className='image-outer title-list-item-icon'><img src={L_COIN}></img></span>
                        <p className='title-list-item-text'>Выйти на стабильные 100 тыс. р. в месяц</p>
                    </div>
                    <div className='title-list-item'>
                        <span className='image-outer title-list-item-icon'><img src={L_CALENDAR}></img></span>
                        <p className='title-list-item-text'>Начать работать до 6 часов в день и все успевать</p>
                    </div>
                    <div className='title-list-item'>
                        <span className='image-outer title-list-item-icon'><img src={L_PEOPLE}></img></span>
                        <p className='title-list-item-text'>Найти клиентов, которые готовы стабильно платить по 20-35 тысяч за проект</p>
                    </div>
                </div>

                <button className='title-button'>ВСТУПИТЬ В КЛУБ</button>
                <span className='image-outer title-flag'><img src={FLAG}></img></span>
                <div className='image-outer title-knight'><img src={KNIGHT}></img></div>


            </div>

        </div>
        <div className='title-bottom-bar'>
            <div className='title-bottom-bar-item'>
                <span className='image-outer title-bottom-bar-item-img'><img src={B_CALENDAR}></img></span>
                <div className='title-bottom-bar-item-text'>
                    <p className='title-bottom-bar-item-text-top'>4.5 месяца</p>
                    <p className='title-bottom-bar-item-text-bottom'>Существует клуб</p>
                </div>
            </div>
            <div className='title-bottom-bar-item'>
                <span className='image-outer title-bottom-bar-item-img'><img src={B_PEOPLE}></img></span>
                <div className='title-bottom-bar-item-text'>
                    <p className='title-bottom-bar-item-text-top'>113 участников</p>
                    <p className='title-bottom-bar-item-text-bottom'>На данный момент</p>
                </div>
            </div>
            <div className='title-bottom-bar-item'>
                <span className='image-outer title-bottom-bar-item-img'><img src={B_MONEY}></img></span>
                <div className='title-bottom-bar-item-text'>
                    <p className='title-bottom-bar-item-text-top'>1 500 000 р.</p>
                    <p className='title-bottom-bar-item-text-bottom'>Заработано участниками</p>
                </div>
            </div>


        </div>

    </>;
};

export default Title;
