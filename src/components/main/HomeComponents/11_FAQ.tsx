import * as React from 'react';
import plus from '../../../images/Icons/plus.png'
import { isMobile } from 'react-device-detect';
import minus from '../../../images/Icons/minus.png'
interface IFAQProps {
}

const FAQ: React.FunctionComponent<IFAQProps> = (props) => {

    const data_snippet = [

        {
            id: 1,
            title: 'Если я оплачиваю участие в клубе на месяц и по каким-то причинам мне это уже неактуально, как я смогу отменить участие?',
            body: <>
                <p>За 3 и за 1 день до следующего списания оплаты тебе в личку в Вк и на email придет уведомление, что скоро будет продлено участие в клубе.</p>
                <p>Внутри письма будет ссылка на отписку, которую ты можешь нажать и отменить подписку на следующий месяц.</p>
            </>
        },

        {
            id: 2,
            title: 'Клуб подходит для таргетологов из Вконтакте и Инстаграма?',
            body: <>
                <p>Да. Ты так же прокачаешь навыки по поиску клиентов и работе с ними, чтобы делать крутые кейсы и максимально долго сотрудничасть.</p>
            </>
        },
        {
            id: 3,
            title: 'А если я маркетолог/дизайнер/директолог/копирайтер, для меня вход открыт?',
            body: <>
                <p>Нет. У нас клуб только для таргетологов. И информация для вас будет не актуальна.</p>
            </>
        },

    ]



    const [selectedTips, setSelectedTips] = React.useState<number[]>([])

    const mobile = isMobile ? ' mobile' : ''

    return <>
        <div className={'faq-main-title' + mobile}>
            <p className={'faq-main-title-top' + mobile}>ОСТАЛИСЬ ВОПРОСЫ?</p>
            <p className={'faq-main-title-bottom' + mobile}>ДАВАЙ ОТВЕТИМ!</p>
        </div>
        <div className={'faq-container' + mobile}>
            {data_snippet.map(s => {
                return <div className={'faq-item-container' + mobile}>
                    <div className={'faq-item-line' + mobile} onClick={_ => {
                        selectedTips.includes(s.id) ? setSelectedTips(selectedTips.filter(t => t != s.id)) : setSelectedTips([...selectedTips, s.id])
                    }}>
                        <p className={'faq-item-line-title' + mobile}>{s.title}</p>
                        <span className={'faq-item-icon' + mobile}>
                            <img src={selectedTips.includes(s.id) ? minus : plus}></img>
                        </span>

                    </div>
                    {selectedTips.includes(s.id) && <div className={'faq-item-text' + mobile}>
                        {s.body}
                    </div>}
                </div>
            })}
        </div>
    </>;
};

export default FAQ;
