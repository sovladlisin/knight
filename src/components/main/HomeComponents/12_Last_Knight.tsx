import * as React from 'react';
import L_CALENDAR from '../../../images/1_Title/list-calendar.png'
import L_COIN from '../../../images/1_Title/list-coin.png'
import L_PEOPLE from '../../../images/1_Title/list-people.png'

import coins from '../../../images/12_Last_Knight/coins.png'
import { isMobile } from 'react-device-detect';
import knight from '../../../images/12_Last_Knight/knight.png'


interface ILast_KnightProps {
}

const Last_Knight: React.FunctionComponent<ILast_KnightProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'last-knight-container-outer' + mobile}>
            {!isMobile && <>
                <span className={'image-outer last-knight-image-coin' + mobile}><img src={coins}></img></span>
                <span className={'image-outer last-knight-image-knight' + mobile}><img src={knight}></img></span>
            </>}

            <div className={'last-knight-container' + mobile}>


                <a className={'last-knight-join' + mobile} href={'https://vk.com/app5898182_-207041967#s=1514406'} target="_blank" rel="noopener noreferrer">ВСТУПИТЬ В КЛУБ</a>

                <div className={'last-knight-content' + mobile}>

                    {isMobile && <>
                        <span className={'image-outer last-knight-image-coin' + mobile}><img src={coins}></img></span>
                        <span className={'image-outer last-knight-image-knight' + mobile}><img src={knight}></img></span>
                    </>}
                    <div className={'last-knight-content-left' + mobile}>
                        <p className={'last-knight-content-main-title' + mobile}>Закрытый клуб<br></br>
                            богатых таргетологов<br></br>
                            “Таргетрон”</p>
                        <p className={'last-knight-content-second-title' + mobile}>Здесь ты получишь все, чтобы:</p>

                        <div className={'last-knight-item-list' + mobile}>
                            <div className={'last-knight-item' + mobile}>
                                <span className={'image-outer last-knight-item-icon' + mobile}><img src={L_COIN}></img></span>
                                <p className={'last-knight-item-text' + mobile}>Выйти на стабильные 100 тыс. р. в месяц</p>
                            </div>
                            <div className={'last-knight-item' + mobile}>
                                <span className={'image-outer last-knight-item-icon' + mobile}><img src={L_CALENDAR}></img></span>
                                <p className={'last-knight-item-text' + mobile}>Начать работать до 6 часов в день и все успевать</p>
                            </div>
                            <div className={'last-knight-item' + mobile}>
                                <span className={'image-outer last-knight-item-icon' + mobile}><img src={L_PEOPLE}></img></span>
                                <p className={'last-knight-item-text' + mobile}>Найти клиентов, которые готовы стабильно платить<br></br>
                                    по 20-35 тысяч за проект</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    </>;
};

export default Last_Knight;
