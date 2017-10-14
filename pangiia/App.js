import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route as Page, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import DevTools from './utils/DevTools';
import EventFeedPage from './pages/event-feed';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
require('./styles/eventTimeline.scss');
import aws from './images/aws.png'
import docker from './images/docker.png'
import micoservices from './images/micro-services.png'
import mongodb from './images/mongodb.png'
import pdf from './assets/KH_Resume_2017.pdf'
import nodejs from './images/nodejs-icon.png'
import reactjs from './images/reactjs.png'
import rest from './images/rest.png'
import { SocialIcon } from 'react-social-icons';

/**
 * -------------------------------------------------------
 * Parallax
 * -------------------------------------------------------
 * 
 * Experimenting with some scroll based parallax effects 
 * using React. See react-scroll-parallax:
 * https://github.com/jscottsmith/react-scroll-parallax
 *
 */

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const P1 = {
    bounds: [234, 321],
    forms: [
        <div>
        <img src={aws}/>
        </div>,
    ],
};

const A2 = {
    bounds: [167, 281],
    forms: [
        <div><img src={docker}/></div>,
    ],
};

const R3 = {
    bounds: [165, 281],
    forms: [
        <div><img src={micoservices}/></div>,
    ]
};

const A4 = {
    bounds: [167, 281],
    forms: [
        <div><img src={mongodb}/></div>,
    ]
};

const L5 = {
    bounds: [130, 251],
    forms: [
        <div><img src={nodejs}/></div>,
    ],
};

// const L6 = {
//     bounds: [110, 281],
//     forms: [
//         <img src={nodejs}/>,
//     ],
// };

const A7 = {
    bounds: [117, 221],
    forms: [
        <div><img src={reactjs}/></div>,
    ],
};

const X8 = {
    bounds: [117, 221],
    forms: [
        <div><img src={rest}/></div>,
    ],
};

const Gradients = () => (
    <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6ED0DD" />
                <stop offset="100%" stopColor="#70E2B9" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#405D86" />
                <stop offset="100%" stopColor="#384257" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ED6088" />
                <stop offset="100%" stopColor="#C86FA3" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F07F6B" />
                <stop offset="100%" stopColor="#EFC15C" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8D63B1" />
                <stop offset="100%" stopColor="#8179CB" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#EDD460" />
                <stop offset="100%" stopColor="#EDBC39" />
            </linearGradient>
        </defs>
    </svg>
);

const word = [P1, A2, R3, X8, A4, L5, A7];

class Letter extends React.Component {
    render() {
        const { letter } = this.props;
        const offset = getRandomInt(50, 150);
        const isSlower = getRandomInt(0, 1) ? true : false;
        return (
            <div className="letter" style={{
                width: letter.bounds[0] / 10 + 'rem',
                height: letter.bounds[1] / 10 + 'rem',
            }}>
                {letter.forms.map((X, i) => 
                    <Parallax
                        className="form"
                        key={i}                        
                        offsetYMin={-offset * (i + 1) + 'px'}
                        offsetYMax={offset * (i + 1) + 'px'}
                        slowerScrollRate={isSlower}
                    >
                        {X}
                    </Parallax>
                )}
            </div>
        );
    }
}

const Scroll = () => (
    <div className="scroll">
        <p>stack</p>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
            <polygon className="fill-3" points="167,73 83.5,298.9 0,73 "/>
            <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 "/>
        </svg>
    </div>
);

const Resume = () => (
    <a href={pdf} rel="noopener" target="_blank" className="button">Resum&eacute;</a>
);

const Github = () => (
    <SocialIcon style={{
        margin: "1%",
    }} url="https://github.com/FrescoDev" />
);

const Twitter = () => (
    <SocialIcon style={{
        margin: "1%",
    }} url="https://twitter.com/kojohinson" />
);

const Linkedin = () => (
    <SocialIcon style={{
        margin: "1%",
    }} url="https://www.linkedin.com/in/kojo-hinson-69a4074a/" />
);

const Medium = () => (
    <SocialIcon style={{
        margin: "1%",
    }} url="https://medium.com/@codejo" />
);


const ParallaxWord = () => (
    <div className="word">
        {word.map((X, i) => 
            <Letter key={i} letter={X} />
        )}
    </div>
);

const Fullscreen = () => (
    <div className="fullscreen">
        <h1 className="navtext">Software Engineer</h1>
    </div>
);

const App = () => (
    <ParallaxProvider>
        <main>
            <Scroll />
            <Gradients />
            <ParallaxWord />
            <Github />
            <Twitter />
            <Linkedin />
            <Medium />
            <Resume />
            <Fullscreen />
        </main>
    </ParallaxProvider>
);


App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App