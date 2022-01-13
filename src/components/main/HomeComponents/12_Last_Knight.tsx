import * as React from 'react';
import L_CALENDAR from '../../../images/1_Title/list-calendar.png'
import L_COIN from '../../../images/1_Title/list-coin.png'
import L_PEOPLE from '../../../images/1_Title/list-people.png'

import coins from '../../../images/12_Last_Knight/coins.png'
import knight from '../../../images/12_Last_Knight/knight.png'


interface ILast_KnightProps {
}

const Last_Knight: React.FunctionComponent<ILast_KnightProps> = (props) => {
    return <>
        <div className='last-knight-container-outer'>
            <span className='image-outer last-knight-image-coin'><img src={coins}></img></span>
            <span className='image-outer last-knight-image-knight'><img src={knight}></img></span>
            <div className='last-knight-container'>
                <a className='last-knight-join'>ВСТУПИТЬ В КЛУБ</a>

                <div className='last-knight-content'>
                    <div className='last-knight-content-left'>
                        <p className='last-knight-content-main-title'>Закрытый клуб<br></br>
                            богатых таргетологов<br></br>
                            “Таргетрон”</p>
                        <p className='last-knight-content-second-title'>Здесь ты получишь все, чтобы:</p>

                        <div className='last-knight-item-list'>
                            <div className='last-knight-item'>
                                <span className='image-outer last-knight-item-icon'><img src={L_COIN}></img></span>
                                <p className='last-knight-item-text'>Выйти на стабильные 100 тыс. р. в месяц</p>
                            </div>
                            <div className='last-knight-item'>
                                <span className='image-outer last-knight-item-icon'><img src={L_CALENDAR}></img></span>
                                <p className='last-knight-item-text'>Начать работать до 6 часов в день и все успевать</p>
                            </div>
                            <div className='last-knight-item'>
                                <span className='image-outer last-knight-item-icon'><img src={L_PEOPLE}></img></span>
                                <p className='last-knight-item-text'>Найти клиентов, которые готовы стабильно платить<br></br>
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
