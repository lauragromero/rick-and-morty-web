import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './componets/App';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
 <HashRouter>
    <App />
</HashRouter>, document.getElementById('root'));


