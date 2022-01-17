import * as React from 'react';
import bag from '../../../images/9_Price/bag.png'
import arrow_circle from '../../../images/Icons/arrow-circle.png'
import { isMobile } from 'react-device-detect';
import bars from '../../../images/9_Price/bars.png'
interface IPriceProps {
}

const Price: React.FunctionComponent<IPriceProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'price-container' + mobile}>
            <div className={'price-number-container' + mobile}>
                <h1 className={'price-title' + mobile}>УЧАСТИЕ В КЛУБЕ {!isMobile && <br></br>}
                    СТОИТ:</h1>
                <h1 className={'price-price' + mobile}>2 000 Р. / МЕСЯЦ</h1>
                <p className={'price-desc' + mobile}>Или 66 р. в день. Это как батончик шоколадки каждый день, только{!isMobile && <br></br>}
                    вместо постоянного притока углеводов в твой животик, спустя месяц,{!isMobile && <br></br>}
                    к тебе придут деньги на карту.</p>

                <h2 className={'price-title-2' + mobile}>И ЗА ЭТУ СУММУ ТЫ ПОЛУЧИШЬ:</h2>










                <div className={'price-items' + mobile}>
                    <div className={'price-item' + mobile}>
                        <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                        <p className={'price-item-text' + mobile}>Живые эфиры с топ спикерами; </p>
                    </div>
                    <div className={'price-item' + mobile}>
                        <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                        <p className={'price-item-text' + mobile}>Закрытый чат таргетологов;</p>
                    </div>
                    <div className={'price-item' + mobile}>
                        <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                        <p className={'price-item-text' + mobile}>Видеоуроки с конспектами;</p>
                    </div>
                    <div className={'price-item' + mobile}>
                        <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                        <p className={'price-item-text' + mobile}>Ответы основателя клуба который уже прошел твой путь;</p>
                    </div>
                    <div className={'price-item' + mobile}>
                        <span className={'image-outer arrow-circle' + mobile}><img src={arrow_circle}></img></span>
                        <p className={'price-item-text' + mobile}>Возможность получать новые заказы.</p>
                    </div>
                </div>
            </div>
            <span className={'image-outer price-number-bars-1' + mobile}><img src={bars}></img></span>
            <span className={'image-outer price-number-coinbag-1' + mobile}><img src={bag}></img></span>

        </div>

    </>;
};

export default Price;
