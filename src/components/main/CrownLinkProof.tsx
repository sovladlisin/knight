import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { useOnClickOutside } from '../utils/HandleClickOutside';

import link1 from '../../images/3_Common_List/crown-link-1.jpg'
import link2 from '../../images/3_Common_List/crown-link-2.jpg'
import link3 from '../../images/3_Common_List/crown-link-3.jpg'
import link4 from '../../images/3_Common_List/crown-link-4.jpg'
import link5 from '../../images/3_Common_List/crown-link-5.jpg'
import link6 from '../../images/3_Common_List/crown-link-6.jpg'

interface ICrownLinkProfProps {
    src: number,
    onClose: () => void
}

const CrownLinkProf: React.FunctionComponent<ICrownLinkProfProps> = (props) => {
    const mobile = isMobile ? ' mobile' : ''

    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())

    const getImage = () => {
        switch (props.src) {
            case 1:
                return link1
            case 2:
                return link2
            case 3:
                return link3
            case 4:
                return link4
            case 5:
                return link5
            case 6:
                return link6
        }
    }


    return <>
        <div className='m-background'></div>
        <div className='crown-link-proof-container' ref={ref}>
            <span className={'image-outer crown-link-proof-image' + mobile}><img src={getImage()}></img></span>
        </div>
    </>;
};

export default CrownLinkProf;
