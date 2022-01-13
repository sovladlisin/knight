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

const Live_Streams: React.FunctionComponent<ILive_StreamsProps> = (props) => {
    return <>
        <div className='live-streams-container-outer'>
            <div className='live-streams-container'>
                <div className='common-title-container'>
                    <span className='image-outer common-title-icon'><img src={cl1}></img></span>

                    <div className='common-title-text'>
                        <h1 className='common-title'>1. Прямые эфиры <br></br>
                            от топ-экспертов </h1>
                        <p className='common-subtitle'>Мы приглашаем медийных и крепких таргетологов
                            с доходом 100 тыс. р. - 500 тыс. р. в месяц:</p>

                        <div className='live-streams-item-list'>
                            <div className='live-streams-item-list-item'>
                                <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                                <p className='live-streams-item-list-item-text'>
                                    Как работать до 5 часов в день, 5 дней в неделю и делать от 100 тыс. р. чистыми;
                                </p>
                            </div>
                            <div className='live-streams-item-list-item'>
                                <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                                <p className='live-streams-item-list-item-text'>Как выйти на 200 тыс. р. - 300 тыс. р. в месяц, стабилизировать прибыль, вызывать
                                    полное доверие и уважение у клиентов;</p>
                            </div>
                            <div className='live-streams-item-list-item'>
                                <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                                <p className='live-streams-item-list-item-text'>Как выбрать, что делать и что не делать, чтобы таргетологу расти в деньгах
                                    без выгорания и увеличения рабочего времени?</p>
                            </div>
                            <div className='live-streams-item-list-item'>
                                <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                                <p className='live-streams-item-list-item-text'>Как обеспечить денежный поток из разных источников и уменьшить риски
                                    остаться без денег при очередном карантине.</p>
                            </div>
                        </div>

                        <a className='live-streams-item-list-link gold-text'><p>Посмотреть все темы эфиров</p><i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>








                <div className='live-streams-people-icons'>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P1}></img></span>
                        <p className='live-streams-person-name'>алексей
                            волков</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P2}></img></span>
                        <p className='live-streams-person-name'>Яна
                            Рыжая</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P3}></img></span>
                        <p className='live-streams-person-name'>анатолий
                            милов</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P4}></img></span>
                        <p className='live-streams-person-name'>Дмитрий
                            гладких</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P5}></img></span>
                        <p className='live-streams-person-name'>мария
                            самылина</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P6}></img></span>
                        <p className='live-streams-person-name'>алла
                            булеева</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P7}></img></span>
                        <p className='live-streams-person-name'>андрей
                            курбатов</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P8}></img></span>
                        <p className='live-streams-person-name'>вадим
                            кравченко</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P9}></img></span>
                        <p className='live-streams-person-name'>константин
                            григорьев</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P10}></img></span>
                        <p className='live-streams-person-name'>екатерина
                            швец</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P11}></img></span>
                        <p className='live-streams-person-name'>анастасия
                            иванченко</p>
                    </div>
                    <div className='live-streams-person-icon-container'>
                        <span className='image-outer live-streams-person-icon'><img src={P12}></img></span>
                        <p className='live-streams-person-name'>иван
                            волков</p>
                    </div>
                </div>

                <span className='live-streams-line'></span>

                <div className='common-title-container'>
                    <span className='image-outer common-title-icon'><img src={cl2}></img></span>
                    <div className='common-title-text'>
                        <h1 className='common-title'>2. Видеоуроки до 60 минут
                            с краткими pdf-конспектами</h1>
                        <p className='common-subtitle'>Каждый месяц вы получаете 4 новых видео урока длительностью до 60 минут, <br></br>
                            а так же краткие PDF-конспекты к этим уроком, если нет времени смотреть весь эфир. </p>
                    </div>
                </div>


                <div className='live-streams-crown-link-container'>
                    <Crown_Link image={cm_crown_2} text={'— «Удалось доработать личную страницу, \n внедрить новую систему тайм-\nменеджмента, и "допилить" своё \nфрилансерское мышление...»'} />
                </div>



            </div>
            <span className='image-outer live-streams-coins-1'><img src={Side_Coins}></img></span>
            <span className='image-outer live-streams-play-1'><img src={Side_Play}></img></span>
        </div>

    </>;
};

export default Live_Streams;
