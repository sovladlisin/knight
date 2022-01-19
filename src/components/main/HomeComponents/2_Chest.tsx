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
import { isMobile } from 'react-device-detect';
import { getOffset } from '../../../utils';

interface IChestProps {
    setProof: (k: number) => void
}

const Chest: React.FunctionComponent<IChestProps> = (props) => {

    const mobile = isMobile ? ' mobile' : ''




    return <>
        <div className={'chest-container-outer' + mobile} >
            <span data-speed={120} className={'image-outer chest-crown-1 parallax' + mobile}><img src={CROWN_FUZZY}></img></span>

            <div className={'chest-triangle-top' + mobile}></div>
            <div className={'chest-triangle-bottom-1' + mobile}></div>
            <div className={'chest-triangle-bottom-2' + mobile}></div>
            <div className={'chest-container' + mobile}>

                <h1 className={'chest-h1' + mobile}>
                    {isMobile ? <>
                        каждый месяц <br></br>
                        участники нашего <br></br> клуба
                        получают:
                    </> : <>
                        каждый месяц <br></br>
                        участники нашего клуба <br></br>
                        получают:
                    </>}



                </h1>

                <span className={'image-outer chest-chest' + mobile}><img src={CHEST}></img></span>
                <span data-speed={40} className={'image-outer chest-crown-2 parallax' + mobile}><img src={BLACK_RUBY}></img></span>
                <span data-speed={80} className={'image-outer chest-crown-3 parallax' + mobile}><img src={MOON}></img></span>
                <span data-speed={30} className={'image-outer chest-crown-4 parallax' + mobile}><img src={SMALL_CROWN}></img></span>




                <div className={'chest-items' + mobile}>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={COINBAG}></img></span>

                        <p className={'chest-item-title gold-text' + mobile}>1. Прямые эфиры</p>
                        <p className={'chest-item-link' + mobile}>от топ экспертов с доходом <br></br> 100 тыс. р. - 500 тыс. р. в месяц</p>
                    </div>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={RUBY}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>2. Видеоуроки</p>
                        <p className={'chest-item-link' + mobile}>до 60 минут с краткими <br></br> pdf-конспектами</p>
                    </div>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={GOLD_COIN}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>3. Закрытый чат</p>
                        <p className={'chest-item-link' + mobile}>помогаем друг <br></br> другу советами</p>
                    </div>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={SCROLL}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>4. Вакансии</p>
                        <p className={'chest-item-link' + mobile}>передаем заказы нашим <br></br> участникам</p>
                    </div>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={KEY}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>5. Выжимка из чата</p>
                        <p className={'chest-item-link' + mobile}>ценные сообщения <br></br> из сотен в одной pdf-ке</p>
                    </div>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={CROWN_GOLD}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>6. Ответы на вопросы</p>
                        <p className={'chest-item-link' + mobile}>от основателя клуба<br></br> с доходом 1+ млн р. в месяц</p>
                    </div>

                    <span></span>
                    <div>
                        <span className={'image-outer chest-item-icon' + mobile}><img src={SHIELD}></img></span>
                        <p className={'chest-item-title gold-text' + mobile}>7. Денежный босс <br></br> 99 уровня</p>
                        <p className={'chest-item-link' + mobile}>чтобы окупить клуб <br></br>за 7 дней</p>
                    </div>
                    <span></span>

                </div>


            </div>
        </div>

        <h2 className={'chest-crown-link-header' + mobile}>
            Весь контент про упаковку, привлечение клиентов, мышление <br></br>“богатого таргетолога”, чтобы ты постоянно рос в доходе и было так:
        </h2>

        <Crown_Link setProof={(n) => props.setProof(n)} src={1} image={cm_crown_1} text={"— «377к за сентябрь. \n И это не предел, бодаем 500...»"} />

    </>;
};

export default Chest;
