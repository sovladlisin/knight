import * as React from 'react';

interface ICrown_LinkProps {
    text: string,
    image?: any
}

const Crown_Link: React.FunctionComponent<ICrown_LinkProps> = (props) => {
    return <>

        <div className='crown-link-container'>

            <div className='crown-link-block'>
                <span className='image-outer crown-link-helmet'><img src={props.image}></img></span>

                <div className='crown-link-text'>
                    <p className='crown-link-text-top'>{props.text}</p>
                    <p className='crown-link-text-bottom'>Отзыв нашего участника</p>
                </div>
                <a className='crown-link-link gold-text'><p>Смотреть пруф</p> <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>

        </div>
    </>;
};

export default Crown_Link;
