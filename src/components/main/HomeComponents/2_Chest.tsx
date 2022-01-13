import * as React from 'react';
import Crown_Link from './3_Crown_Link';

import BLACK_RUBY from '../../../images/2_Chest/black-ruby.png'
import CHEST from '../../../images/2_Chest/chest.png'
import COINBAG from '../../../images/2_Chest/coinbag.png'
import CROWN_FUZZY from '../../../images/2_Chest/crown-fuzzy.png'
import CROWN_GOLD from '../../../images/2_Chest/crown-gold.png'
import GOLD_COIN from '../../../images/2_Chest/gold-coin.png'
import KEY from '../../../images/2_Chest/key.png'
import MOON from '../../../images/2_Chest/moon.png'
import RUBY from '../../../images/2_Chest/ruby.png'
import SCROLL from '../../../images/2_Chest/scroll.png'
import SHIELD from '../../../images/2_Chest/shield.png'
import SMALL_CROWN from '../../../images/2_Chest/small-crown.png'
import cm_crown_1 from '../../../images/3_Common_List/helmet-1.png'

interface IChestProps {
}

const Chest: React.FunctionComponent<IChestProps> = (props) => {
    return <>
        <div className='chest-container-outer'>
            <span className='image-outer chest-crown-1'><img src={CROWN_FUZZY}></img></span>

            <div className='chest-triangle-top'></div>
            <div className='chest-triangle-bottom-1'></div>
            <div className='chest-triangle-bottom-2'></div>
            <div className='chest-container'>
                <h1 className='chest-h1'>каждый месяц <br></br>
                    участники нашего клуба <br></br>
                    получают:</h1>

                <span className='image-outer chest-chest'><img src={CHEST}></img></span>
                <span className='image-outer chest-crown-2'><img src={BLACK_RUBY}></img></span>
                <span className='image-outer chest-crown-3'><img src={MOON}></img></span>
                <span className='image-outer chest-crown-4'><img src={SMALL_CROWN}></img></span>




                <div className='chest-items'>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={COINBAG}></img></span>

                        <p className='chest-item-title gold-text'>1. Прямые эфиры</p>
                        <p className='chest-item-link'>от топ экспертов с доходом <br></br> 100 тыс. р. - 500 тыс. р. в месяц</p>
                    </div>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={RUBY}></img></span>
                        <p className='chest-item-title gold-text'>2. Видеоуроки</p>
                        <p className='chest-item-link'>до 60 минут с краткими <br></br> pdf-конспектами</p>
                    </div>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={GOLD_COIN}></img></span>
                        <p className='chest-item-title gold-text'>3. Закрытый чат</p>
                        <p className='chest-item-link'>помогаем друг <br></br> другу советами</p>
                    </div>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={SCROLL}></img></span>
                        <p className='chest-item-title gold-text'>4. Вакансии</p>
                        <p className='chest-item-link'>передаем заказы нашим <br></br> участникам</p>
                    </div>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={KEY}></img></span>
                        <p className='chest-item-title gold-text'>5. Выжимка из чата</p>
                        <p className='chest-item-link'>ценные сообщения <br></br> из сотен в одной pdf-ке</p>
                    </div>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={CROWN_GOLD}></img></span>
                        <p className='chest-item-title gold-text'>6. Ответы на вопросы</p>
                        <p className='chest-item-link'>от основателя клуба<br></br> с доходом 1+ млн р. в месяц</p>
                    </div>

                    <span></span>
                    <div>
                        <span className='image-outer chest-item-icon'><img src={SHIELD}></img></span>
                        <p className='chest-item-title gold-text'>7. Денежный босс <br></br> 99 уровня</p>
                        <p className='chest-item-link'>чтобы окупить клуб <br></br>за 7 дней</p>
                    </div>
                    <span></span>

                </div>


            </div>
        </div>

        <h2 className='chest-crown-link-header'>
            Весь контент про упаковку, привлечение клиентов, мышление <br></br>“богатого таргетолога”, чтобы ты постоянно рос в доходе и было так:
        </h2>

        <Crown_Link image={cm_crown_1} text={"— «377к за сентябрь. \n И это не предел, бодаем 500...»"} />

    </>;
};

export default Chest;
