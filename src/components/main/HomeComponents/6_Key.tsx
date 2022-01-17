import * as React from 'react';
import Crown_Link from './3_Crown_Link';
import cm_crown_5 from '../../../images/3_Common_List/helmet-5.png'
import cm_crown_6 from '../../../images/3_Common_List/helmet-6.png'

import Side_Many_Coins from '../../../images/Sides/many-coins.png'

import Side_Coins from '../../../images/Sides/coins.png'
import Side_Fuzzy_Crown from '../../../images/Sides/fuzzy-crown.png'
import Side_Play from '../../../images/Sides/play.png'

import cl5 from '../../../images/3_Common_List/list-5.png'
import cl6 from '../../../images/3_Common_List/list-6.png'
interface IKeyProps {
}
import { isMobile } from 'react-device-detect';

const Key: React.FunctionComponent<IKeyProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'key-outer-container' + mobile}>
            <div className={'key-container' + mobile}>
                <div className={'common-title-container' + mobile}>
                    <span className={'image-outer common-title-icon' + mobile}><img src={cl5}></img></span>
                    <div className={'common-title-text' + mobile}>
                        <h1 className={'common-title' + mobile}>5. Выжимка самого полезного {!isMobile && <br></br>}
                            из чата каждую неделю</h1>
                        <p className={'common-subtitle' + mobile}><span>Вместо “тысячи сообщений за день” ты получишь раз в неделю
                            выжимку самого полезного, что было за неделю.</span>
                            <span>Тебе не придется листать весь чат чтобы найти самое главное, мы это сделали
                                уже за тебя. Занимайся рекламой, расти в доходе, а сбор инфы оставь нам.</span>
                        </p>
                    </div>
                </div>

                <Crown_Link text={'— «Все полезные лайфхаки собраны в одно \n место. Если я что-то не прочитал в течение месяца — \n мне это собрали в отдельный документ и самые \n выжимки могу прочитать любой момент времени...»'} image={cm_crown_5} />

                <span className={'key-line' + mobile}></span>

                <div className={'common-title-container' + mobile}>
                    <span className={'image-outer common-title-icon' + mobile}><img src={cl6}></img></span>
                    <div className={'common-title-text' + mobile}>
                        <h1 className={'common-title' + mobile}>6. Ответы на вопросы {!isMobile && <br></br>}
                            от основателя клуба</h1>
                        <p className={'common-subtitle' + mobile}>Можно получить развернутый ответ на свой вопрос от основателя клуба. {!isMobile && <br></br>}
                            Несмотря на то, что его доход более 1 млн. р. в месяц. </p>
                    </div>
                </div>

                <div className={'key-crown-link-container' + mobile}>
                    <Crown_Link image={cm_crown_6} text={'— «Поздравь меня: я в клубе 500+ \n Помог твой скрипт поиска клиентов...»'} />

                </div>

            </div>
            <span className={'image-outer key-coins-1  parallax' + mobile}><img src={Side_Many_Coins}></img></span>

        </div>

    </>;
};

export default Key;
