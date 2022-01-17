import * as React from 'react';
import { useState, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FaviconContainer from './main/FaviconContainer';
import Home from './main/Home';


const App: React.FC = () => {
    return (
        <>
            <FaviconContainer />
            <Home />
        </>
    )
}

export default App