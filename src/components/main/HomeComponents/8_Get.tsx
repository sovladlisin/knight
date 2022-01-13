import * as React from 'react';

interface IGetProps {
}

import coin from '../../../images/8_Get/coin.png'
import cup from '../../../images/8_Get/cup.png'
import kid from '../../../images/8_Get/kid.png'
import wings from '../../../images/8_Get/wings.png'

const Get: React.FunctionComponent<IGetProps> = (props) => {
    return <>
        <div className='get-container-outer'>
            <div className='chest-triangle-top'></div>
            <div className='chest-triangle-bottom-1'></div>
            <div className='chest-triangle-bottom-2'></div>

            <div className='get-container'>
                <h1 className='get-header'>А в итоге ты <br></br>
                    Получишь все, чтобы:</h1>

                <div className='get-items'>
                    <div className='get-item'>
                        <p className='get-item-title'>Выйти на стабильные<br></br>
                            100 000 р. В месяц</p>
                        <p className='get-item-text'>Поймешь как стабильно набирать<br></br>
                            клиентов на месяц вперед<br></br>
                            на продвижение, не полагаясь<br></br>
                            на «сарафан».</p>
                    </div>
                    <div className='get-item'>
                        <p className='get-item-title'>Работать до 6 часов<br></br>
                            в день</p>
                        <p className='get-item-text'>Даже если сейчас упахиваешься<br></br>
                            по 10-12 часов или не можешь оставить<br></br>
                            рекламный кабинет больше чем на час.</p>
                    </div>
                    <div className='get-item'>
                        <p className='get-item-title'>Сделать<br></br>
                            сильные кейсы</p>
                        <p className='get-item-text'>Сможешь выдавать крутой результат<br></br>
                            заказчику и хвастаться кейсами у себя<br></br>
                            на странице. Потому что поймешь, как<br></br>
                            находить такие проекты и как в них<br></br>
                            выдавать сильный результат, окупая<br></br>
                            рекламу заказчика в несколько раз.</p>
                    </div>
                    <div className='get-item'>
                        <p className='get-item-title'>Тебя считали<br></br>
                            профессионалом</p>
                        <p className='get-item-text'>Получишь уважение от клиентов, потому<br></br>
                            что в тебе начнут видеть специалиста,<br></br>
                            а не ручную обезьяну «принеси-подай».<br></br>
                            Придет внутреннее спокойствие,<br></br>
                            избавишься от постоянных переживаний,<br></br>
                            стресса и прогибаний от заказчика.</p>
                    </div>
                    <div className='get-item'>
                        <p className='get-item-title'>Попадешь<br></br>
                            в тусовку</p>
                        <p className='get-item-text'>Зайдешь в нашу семью (чат) таргетологов,<br></br>
                            которые будут с тобой «одной крови».<br></br>
                            И мы совместно, как спартанцы, будем<br></br>
                            покорять мир таргета, выдавать крутые<br></br>
                            результаты и зарабатывать кэш. И, самое<br></br>
                            главное, поддерживать друг друга.</p>
                    </div>
                </div>

                <div className='get-quote-container'>
                    <p className='get-quote-text'>…. и в итоге превратишься
                        из салаги с трусами и палкой
                        в руке, в сильного воина
                        в крепких доспехах
                        со светящимся мечом </p>
                    <button className='get-quote-button'>ВСТУПИТЬ В КЛУБ</button>
                </div>



            </div>
            <span className='image-outer get-wings-1'><img src={wings}></img></span>
            <span className='image-outer get-cup-1'><img src={cup}></img></span>
            <span className='image-outer get-knight-1'><img src={kid}></img></span>
            <span className='image-outer get-coin-1'><img src={coin}></img></span>

        </div>


    </>;
};

export default Get;
