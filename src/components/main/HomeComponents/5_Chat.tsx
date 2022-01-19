import * as React from 'react';
import Crown_Link from './3_Crown_Link';

import Side_Scroll from '../../../images/Sides/scroll.png'
import cl3 from '../../../images/3_Common_List/list-3.png'
import cl4 from '../../../images/3_Common_List/list-4.png'


import cm_crown_3 from '../../../images/3_Common_List/helmet-3.png'
import cm_crown_4 from '../../../images/3_Common_List/helmet-4.png'

interface IChatProps {
    setProof: (k: number) => void

}
import { isMobile } from 'react-device-detect';

const Chat: React.FunctionComponent<IChatProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''


    return <>
        <div className={'chat-container' + mobile}>
            <div className={'common-title-container' + mobile}>
                <span className={'image-outer common-title-icon' + mobile}><img src={cl3}></img></span>

                <div className={'common-title-text' + mobile}>
                    <h1 className={'common-title' + mobile}>3. Закрытый чат
                        «таверна таргетолога»</h1>
                    <p className={'common-subtitle' + mobile}><span>Поддержка, советы, ответы на вопросы от коллег.</span>
                        <span>Ты сможешь задать свой вопрос и получить ответ от тех, кто уже сталкивался
                            с подобным и решил этот затык. Не важно — вопрос по рекламному кабинету
                            или что делать, если нагибает заказчик.</span>
                    </p>
                </div>
            </div>

            <Crown_Link setProof={(n) => props.setProof(n)} src={3} image={cm_crown_3} text={'— «Единственный чат, в котором я \n читаю все! Тут можно и заказики \n найти, и работодателя, сама так \n одного таргетолога привлекала \n на проект...»'} />

            <span className={'chat-line' + mobile}></span>

            <div className={'common-title-container' + mobile}>
                <span className={'image-outer common-title-icon' + mobile}><img src={cl4}></img></span>

                <div className={'common-title-text' + mobile}>
                    <h1 className={'common-title' + mobile}>4. Заказы для клубчан</h1>
                    <p className={'common-subtitle' + mobile}><span>К нам обращаются за помощью настроить таргет или сделать другие
                        маркетинговые услуги. Эти заказы передаем участникам клуба, чтобы они могли
                        зарабатывать проще и быстрее.</span>
                        <span>В последний раз участник окупил клуб этим способом в 10 раз.</span>
                    </p>
                </div>
            </div>

            <div className={'chat-bottom-crown-container' + mobile}>
                <Crown_Link setProof={(n) => props.setProof(n)} src={4} image={cm_crown_4} text={'— «Окупил клуб x10 раз всего \n одним клиентом из чата...»'} />
            </div>

            <span className={'image-outer chat-scroll-1  parallax' + mobile}><img src={Side_Scroll}></img></span>

        </div>
    </>;
};

export default Chat;
