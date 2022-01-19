import * as React from 'react';

interface ICrown_LinkProps {
    text: string,
    image?: any,
    src: number,
    setProof: (k: number) => void
}
import { isMobile } from 'react-device-detect';

const Crown_Link: React.FunctionComponent<ICrown_LinkProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''


    return <>

        <div className={'crown-link-container' + mobile}>

            <div className={'crown-link-block' + mobile}>
                <span className={'image-outer crown-link-helmet' + mobile}><img src={props.image}></img></span>

                <div className={'crown-link-text' + mobile}>
                    <p className={'crown-link-text-top' + mobile}>{props.text}</p>
                    <p className={'crown-link-text-bottom' + mobile}>Отзыв нашего участника</p>
                </div>
                <a onClick={_ => props.setProof(props.src)} className={'crown-link-link gold-text' + mobile}><p>Смотреть пруф</p> <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>

        </div>

    </>;
};

export default Crown_Link;
