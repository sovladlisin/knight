import * as React from 'react';
import { useState, } from 'react';
import Alert from './alerts/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FaviconContainer from './main/FaviconContainer';
import Home from './main/Home';


const App: React.FC = () => {
    return (
        <>
            <FaviconContainer />
            <Alert />
            <Home />
        </>
    )
}

export default App