import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './src/components/App'

//css
import './src/css/all.css'
import './src/css/fixer.css'
import './src/css/alerts.css'
import './src/css/main.css'
import './src/css/loader.css'
import './src/css/mobile.css'




import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
    <App />
    , document.querySelector('#root')
)

