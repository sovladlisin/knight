import * as React from 'react';
import helmet from '../../../images/8_Get/helmet.png'

interface IMoney_BossProps {
}
import cl7 from '../../../images/3_Common_List/list-7.png'

const Money_Boss: React.FunctionComponent<IMoney_BossProps> = (props) => {
    return <>
        <div className='money-boss-container'>
            <div className='common-title-container'>
                <span className='image-outer common-title-icon'><img src={cl7}></img></span>
                <div className='common-title-text'>
                    <h1 className='common-title'>7. Денежный босс <br></br>
                        99 уровня</h1>
                    <p className='common-subtitle'><span>Специальный эфир, где ты выбираешь  2-3 «денежных инструмента»
                        из 10 и за следующую недели идешь зарабатывать деньги.</span>
                        <span> Ооочень сложно не заработать и не окупить клуб в первый месяц.</span>
                    </p>
                </div>
            </div>
            <span className='image-outer money-boss-helmet-1'><img src={helmet}></img></span>

        </div>
    </>;
};

export default Money_Boss;
