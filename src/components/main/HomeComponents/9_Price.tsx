import * as React from 'react';
import bag from '../../../images/9_Price/bag.png'
import arrow_circle from '../../../images/Icons/arrow-circle.png'
import bars from '../../../images/9_Price/bars.png'
interface IPriceProps {
}

const Price: React.FunctionComponent<IPriceProps> = (props) => {
    return <>
        <div className='price-container'>
            <div className='price-number-container'>
                <h1 className='price-title'>УЧАСТИЕ В КЛУБЕ<br></br>
                    СТОИТ:</h1>
                <h1 className='price-price'>2 000 Р. / МЕСЯЦ</h1>
                <p className='price-desc'>Или 66 р. в день. Это как батончик шоколадки каждый день, только<br></br>
                    вместо постоянного притока углеводов в твой животик, спустя месяц,<br></br>
                    к тебе придут деньги на карту.</p>

                <h2 className='price-title-2'>И ЗА ЭТУ СУММУ ТЫ ПОЛУЧИШЬ:</h2>










                <div className='price-items'>
                    <div className='price-item'>
                        <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                        <p className='price-item-text'>Живые эфиры с топ спикерами; </p>
                    </div>
                    <div className='price-item'>
                        <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                        <p className='price-item-text'>Закрытый чат таргетологов;</p>
                    </div>
                    <div className='price-item'>
                        <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                        <p className='price-item-text'>Видеоуроки с конспектами;</p>
                    </div>
                    <div className='price-item'>
                        <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                        <p className='price-item-text'>Ответы основателя клуба который уже прошел твой путь;</p>
                    </div>
                    <div className='price-item'>
                        <span className='image-outer arrow-circle'><img src={arrow_circle}></img></span>
                        <p className='price-item-text'>Возможность получать новые заказы.</p>
                    </div>
                </div>
            </div>
            <span className='image-outer price-number-bars-1'><img src={bars}></img></span>
            <span className='image-outer price-number-coinbag-1'><img src={bag}></img></span>

        </div>

    </>;
};

export default Price;
