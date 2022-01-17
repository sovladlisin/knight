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
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },

        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
            </>
        },
        {
            id: 7,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat?',
            body: <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis finibus sapien in porttitor. Morbi lobortis enim eu auctor feugiat. Quisque elit ex, pharetra congue sapien at, maximus lobortis augue. Nunc consectetur egestas dolor a fermentum. Donec placerat porttitor velit sagittis tincidunt. Sed nisi quam, interdum nec massa et, pharetra ullamcorper arcu. Mauris laoreet tellus at nisl pretium, sed imperdiet magna dictum. Fusce ac pulvinar urna.</p>
                <p>Sed et sagittis nulla, quis venenatis sem. Aliquam vel arcu volutpat, lobortis leo sed, tincidunt dolor. Sed in risus libero. Nulla lectus ipsum, ultrices aliquam gravida ac, sollicitudin id nisl. Nunc pellentesque, enim non bibendum pulvinar, ligula eros molestie sem, eget accumsan arcu magna sit amet erat. Duis porttitor, sapien id sodales efficitur, ex erat facilisis ipsum, id eleifend velit turpis sed est. Aliquam non erat arcu. Aliquam est erat, aliquam non suscipit quis, maximus eu lectus. Vestibulum porta felis arcu. Vestibulum dictum nulla turpis, sed pretium ex convallis et. Donec eu urna ipsum.</p>
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
