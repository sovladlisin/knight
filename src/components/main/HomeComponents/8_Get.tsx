import * as React from 'react';

interface IGetProps {
}

import coin from '../../../images/8_Get/coin.png'
import cup from '../../../images/8_Get/cup.png'
import kid from '../../../images/8_Get/kid.png'
import wings from '../../../images/8_Get/wings.png'
import { isMobile } from 'react-device-detect';

const Get: React.FunctionComponent<IGetProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'get-container-outer' + mobile}>
            <div className={'chest-triangle-top' + mobile}></div>
            <div className={'chest-triangle-bottom-1' + mobile}></div>
            <div className={'chest-triangle-bottom-2' + mobile}></div>

            <div className={'get-container' + mobile}>
                <h1 className={'get-header' + mobile}>А в итоге ты <br></br>
                    Получишь все, чтобы:</h1>

                <div className={'get-items' + mobile}>
                    <div className={'get-item' + mobile}>
                        <p className={'get-item-title' + mobile}>Выйти на стабильные<br></br>
                            100 000 р. В месяц</p>
                        <p className={'get-item-text' + mobile}>Поймешь как стабильно набирать<br></br>
                            клиентов на месяц вперед<br></br>
                            на продвижение, не полагаясь<br></br>
                            на «сарафан».</p>
                    </div>
                    <div className={'get-item' + mobile}>
                        <p className={'get-item-title' + mobile}>Работать до 6 часов<br></br>
                            в день</p>
                        <p className={'get-item-text' + mobile}>Даже если сейчас упахиваешься<br></br>
                            по 10-12 часов или не можешь оставить<br></br>
                            рекламный кабинет больше чем на час.</p>
                    </div>
                    <div className={'get-item' + mobile}>
                        <p className={'get-item-title' + mobile}>Сделать<br></br>
                            сильные кейсы</p>
                        <p className={'get-item-text' + mobile}>Сможешь выдавать крутой результат<br></br>
                            заказчику и хвастаться кейсами у себя<br></br>
                            на странице. Потому что поймешь, как<br></br>
                            находить такие проекты и как в них<br></br>
                            выдавать сильный результат, окупая<br></br>
                            рекламу заказчика в несколько раз.</p>
                    </div>
                    <div className={'get-item' + mobile}>
                        <p className={'get-item-title' + mobile}>Тебя считали<br></br>
                            профессионалом</p>
                        <p className={'get-item-text' + mobile}>Получишь уважение от клиентов, потому<br></br>
                            что в тебе начнут видеть специалиста,<br></br>
                            а не ручную обезьяну «принеси-подай».<br></br>
                            Придет внутреннее спокойствие,<br></br>
                            избавишься от постоянных переживаний,<br></br>
                            стресса и прогибаний от заказчика.</p>
                    </div>
                    <div className={'get-item' + mobile}>
                        <p className={'get-item-title' + mobile}>Попадешь<br></br>
                            в тусовку</p>
                        <p className={'get-item-text' + mobile}>Зайдешь в нашу семью (чат) таргетологов,<br></br>
                            которые будут с тобой «одной крови».<br></br>
                            И мы совместно, как спартанцы, будем<br></br>
                            покорять мир таргета, выдавать крутые<br></br>
                            результаты и зарабатывать кэш. И, самое<br></br>
                            главное, поддерживать друг друга.</p>
                    </div>
                </div>

                <div className={'get-quote-container' + mobile}>
                    <p className={'get-quote-text' + mobile}>…. и в итоге превратишься
                        из салаги с трусами и палкой
                        в руке, в сильного воина
                        в крепких доспехах
                        со светящимся мечом </p>
                    <button className={'get-quote-button' + mobile}>ВСТУПИТЬ В КЛУБ</button>
                </div>

                {isMobile && <>
                    <span className={'image-outer get-knight-1' + mobile}><img src={kid}></img></span>
                    <span className={'image-outer get-coin-1' + mobile}><img src={coin}></img></span>
                </>}

            </div>
            <span className={'image-outer get-wings-1  parallax' + mobile}><img src={wings}></img></span>
            <span className={'image-outer get-cup-1  parallax' + mobile}><img src={cup}></img></span>

            {!isMobile && <>
                <span className={'image-outer get-knight-1' + mobile}><img src={kid}></img></span>
                <span className={'image-outer get-coin-1' + mobile}><img src={coin}></img></span>
            </>}



        </div>


    </>;
};

export default Get;
