import * as React from 'react';
import Crown_Link from './3_Crown_Link';

import cl1 from '../../../images/3_Common_List/list-1.png'
import cl2 from '../../../images/3_Common_List/list-2.png'
import cl3 from '../../../images/3_Common_List/list-3.png'
import cl4 from '../../../images/3_Common_List/list-4.png'
import cl5 from '../../../images/3_Common_List/list-5.png'
import cl6 from '../../../images/3_Common_List/list-6.png'
import cl7 from '../../../images/3_Common_List/list-7.png'

import P1 from '../../../images/People/Speaker 1.png'
import P2 from '../../../images/People/Speaker 2.png'
import P3 from '../../../images/People/Speaker 3.png'
import P4 from '../../../images/People/Speaker 5.png'
import P5 from '../../../images/People/Speaker 6.png'
import P6 from '../../../images/People/Speaker 10.png'
import P7 from '../../../images/People/Speaker 11.png'
import P8 from '../../../images/People/Speaker 12.png'
import P9 from '../../../images/People/Speaker 13.png'
import P10 from '../../../images/People/Speaker 14.png'
import P11 from '../../../images/People/Speaker 15.png'
import P12 from '../../../images/People/Speaker 16.png'

import Side_Coins from '../../../images/Sides/coins.png'
import Side_Fuzzy_Crown from '../../../images/Sides/fuzzy-crown.png'
import Side_Many_Coins from '../../../images/Sides/many-coins.png'
import Side_Play from '../../../images/Sides/play.png'
import Side_Scroll from '../../../images/Sides/scroll.png'

import cm_crown_2 from '../../../images/3_Common_List/helmet-2.png'

import arrow_circle from '../../../images/Icons/arrow-circle.png'

interface ILive_StreamsProps {
}
import { isMobile } from 'react-device-detect';

const Live_Streams: React.FunctionComponent<ILive_StreamsProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''


    return <>
        <div className={'live-streams-container-outer' + mobile}>
            <div className={'live-streams-container' + mobile}>
                <div className={'common-title-container' + mobile}>
                    <span className={'image-outer common-title-icon' + mobile}><img src={cl1}></img></span>

                    <div className={'common-title-text' + mobile}>
                        <h1 className={'common-title' + mobile}>1. Прямые эфиры {!isMobile && <br></br>}
                            от топ-экспертов </h1>
                        <p className={'common-subtitle' + mobile}>Мы приглашаем медийных и крепких таргетологов
                            с доходом 100 тыс. р. - 500 тыс. р. в месяц:</p>

                        <div className={'live-streams-item-list' + mobile}>
                            <div className={'live-streams-item-list-item' + mobile}>
                                <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                                <p className={'live-streams-item-list-item-text' + mobile}>
                                    Как работать до 5 часов в день, 5 дней в неделю и делать от 100 тыс. р. чистыми;
                                </p>
                            </div>
                            <div className={'live-streams-item-list-item' + mobile}>
                                <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                                <p className={'live-streams-item-list-item-text' + mobile}>Как выйти на 200 тыс. р. - 300 тыс. р. в месяц, стабилизировать прибыль, вызывать
                                    полное доверие и уважение у клиентов;</p>
                            </div>
                            <div className={'live-streams-item-list-item' + mobile}>
                                <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                                <p className={'live-streams-item-list-item-text' + mobile}>Как выбрать, что делать и что не делать, чтобы таргетологу расти в деньгах
                                    без выгорания и увеличения рабочего времени?</p>
                            </div>
                            <div className={'live-streams-item-list-item' + mobile}>
                                <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                                <p className={'live-streams-item-list-item-text' + mobile}>Как обеспечить денежный поток из разных источников и уменьшить риски
                                    остаться без денег при очередном карантине.</p>
                            </div>
                        </div>

                        <a className={'live-streams-item-list-link gold-text' + mobile}><p>Посмотреть все темы эфиров</p><i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>








                <div className={'live-streams-people-icons' + mobile}>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P1}></img></span>
                        <p className={'live-streams-person-name' + mobile}>алексей
                            волков</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P2}></img></span>
                        <p className={'live-streams-person-name' + mobile}>Яна
                            Рыжая</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P3}></img></span>
                        <p className={'live-streams-person-name' + mobile}>анатолий
                            милов</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P6}></img></span>
                        <p className={'live-streams-person-name' + mobile}>Дмитрий
                            гладких</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P4}></img></span>
                        <p className={'live-streams-person-name' + mobile}>мария
                            самылина</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P5}></img></span>
                        <p className={'live-streams-person-name' + mobile}>алла
                            булеева</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P7}></img></span>
                        <p className={'live-streams-person-name' + mobile}>андрей
                            курбатов</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P8}></img></span>
                        <p className={'live-streams-person-name' + mobile}>вадим
                            кравченко</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P9}></img></span>
                        <p className={'live-streams-person-name' + mobile}>константин
                            григорьев</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P10}></img></span>
                        <p className={'live-streams-person-name' + mobile}>екатерина
                            швец</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P11}></img></span>
                        <p className={'live-streams-person-name' + mobile}>анастасия
                            иванченко</p>
                    </div>
                    <div className={'live-streams-person-icon-container' + mobile}>
                        <span className={'image-outer live-streams-person-icon' + mobile}><img src={P12}></img></span>
                        <p className={'live-streams-person-name' + mobile}>иван
                            волков</p>
                    </div>
                </div>

                <span className={'live-streams-line' + mobile}></span>

                <div className={'common-title-container' + mobile}>
                    <span className={'image-outer common-title-icon' + mobile}><img src={cl2}></img></span>
                    <div className={'common-title-text' + mobile}>
                        <h1 className={'common-title' + mobile}>2. Видеоуроки до 60 минут
                            с краткими pdf-конспектами</h1>
                        <p className={'common-subtitle' + mobile}>Каждый месяц вы получаете 4 новых видео урока длительностью до 60 минут, {!isMobile && <br></br>}
                            а так же краткие PDF-конспекты к этим уроком, если нет времени смотреть весь эфир. </p>
                    </div>
                </div>


                <div className={'live-streams-crown-link-container' + mobile}>
                    <Crown_Link image={cm_crown_2} text={'— «Удалось доработать личную страницу, \n внедрить новую систему тайм-\nменеджмента, и "допилить" своё \nфрилансерское мышление...»'} />
                </div>



            </div>
            <span data-speed={60} className={'image-outer live-streams-coins-1 parallax' + mobile}><img src={Side_Coins}></img></span>
            <span data-speed={30} className={'image-outer live-streams-play-1 parallax' + mobile}><img src={Side_Play}></img></span>
        </div>

    </>;
};

export default Live_Streams;
