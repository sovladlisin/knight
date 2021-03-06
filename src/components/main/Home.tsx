import * as React from 'react';
import Founder from './HomeComponents/10_Founder';
import FAQ from './HomeComponents/11_FAQ';
import Last_Knight from './HomeComponents/12_Last_Knight';
import Footer from './HomeComponents/13_Footer';
import Title from './HomeComponents/1_Title';
import Chest from './HomeComponents/2_Chest';
import Live_Streams from './HomeComponents/4_Live_Streams';
import Chat from './HomeComponents/5_Chat';
import Key from './HomeComponents/6_Key';
import Money_Boss from './HomeComponents/7_Money_Boss';
import Get from './HomeComponents/8_Get';
import Price from './HomeComponents/9_Price';
import LOGO from '../../images/1_Title/logo 1.png'
import { checkvisible, getOffset } from '../../utils';
import { useOnWindowScroll } from "rooks";
import { isMobile } from 'react-device-detect';
import Policy from './Policy';
import CrownLinkProf from './CrownLinkProof';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    const scrollRef1 = React.useRef(null)
    const scroll1 = () => scrollRef1.current.scrollIntoView({ behavior: 'smooth' })

    const [loading, SetLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            SetLoading(false)
        }, 1500);

    })

    function isInViewport(element) {
        var position = element.getBoundingClientRect();
        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0)
            return true
        return false
    }


    useOnWindowScroll(() => {
        const els = document.getElementsByClassName('parallax')
        Array.prototype.filter.call(els, function (el) {
            if (isInViewport(el))
                el.style.transform = "translateY(" + (getOffset(el).top - window.scrollY) * 0.2 + "px)"
        });
    }
    );

    const mobile = isMobile ? ' mobile' : ''

    const [policy, setPolicy] = React.useState(false)

    const [currentProof, setCurrentProof] = React.useState(-1)

    return <>
        {loading && <div className={'loading' + mobile}>
            <div className={'loading-inner' + mobile}>
                <span className={'image-outer loading-logo' + mobile}>
                    <img src={LOGO}></img>
                </span>
                <div className={'loader-animation' + mobile}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <h1 className={'loading-header' + mobile}>???????????????? ???????? ?????????????? ????????????????????????</h1>
            </div>



        </div>}
        <span id={'main-for-par' + mobile}>
            <span ref={scrollRef1}></span>
            <Title />
            <Chest setProof={(n) => setCurrentProof(n)} />
            <Live_Streams setProof={(n) => setCurrentProof(n)} />
            <Chat setProof={(n) => setCurrentProof(n)} />
            <Key setProof={(n) => setCurrentProof(n)} />
            <Money_Boss />
            <Get />
            <Price />
            <Founder />
            <FAQ />
            <Last_Knight />
            <Footer onReturn={scroll1} onPolicy={() => setPolicy(true)} />

            {policy && <Policy onClose={() => setPolicy(false)} />}
        </span>

        {currentProof != -1 && <CrownLinkProf src={currentProof} onClose={() => setCurrentProof(-1)} />}

    </>;
};

export default Home;
