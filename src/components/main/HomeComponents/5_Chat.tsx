import * as React from 'react';
import Crown_Link from './3_Crown_Link';

import Side_Scroll from '../../../images/Sides/scroll.png'
import cl3 from '../../../images/3_Common_List/list-3.png'
import cl4 from '../../../images/3_Common_List/list-4.png'


import cm_crown_3 from '../../../images/3_Common_List/helmet-3.png'
import cm_crown_4 from '../../../images/3_Common_List/helmet-4.png'

interface IChatProps {
}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
    return <>
        <div className='chat-container'>
            <div className='common-title-container'>
                <span className='image-outer common-title-icon'><img src={cl3}></img></span>

                <div className='common-title-text'>
                    <h1 className='common-title'>3. Закрытый чат
                        «таверна таргетолога»</h1>
                    <p className='common-subtitle'><span>Поддержка, советы, ответы на вопросы от коллег.</span>
                        <span>Ты сможешь задать свой вопрос и получить ответ от тех, кто уже сталкивался
                            с подобным и решил этот затык. Не важно — вопрос по рекламному кабинету
                            или что делать, если нагибает заказчик.</span>
                    </p>
                </div>
            </div>

            <Crown_Link image={cm_crown_3} text={'— «Единственный чат, в котором я \n читаю все! Тут можно и заказики \n найти, и работодателя, сама так \n одного таргетолога привлекала \n на проект...»'} />

            <span className='chat-line'></span>

            <div className='common-title-container'>
                <span className='image-outer common-title-icon'><img src={cl4}></img></span>

                <div className='common-title-text'>
                    <h1 className='common-title'>4. Заказы для клубчан</h1>
                    <p className='common-subtitle'><span>К нам обращаются за помощью настроить таргет или сделать другие
                        маркетинговые услуги. Эти заказы передаем участникам клуба, чтобы они могли
                        зарабатывать проще и быстрее.</span>
                        <span>В последний раз участник окупил клуб этим способом в 10 раз.</span>
                    </p>
                </div>
            </div>

            <div className='chat-bottom-crown-container'>
                <Crown_Link image={cm_crown_4} text={'— «Окупил клуб x10 раз всего \n одним клиентом из чата...»'} />
            </div>

            <span className='image-outer chat-scroll-1'><img src={Side_Scroll}></img></span>

        </div>
    </>;
};

export default Chat;
