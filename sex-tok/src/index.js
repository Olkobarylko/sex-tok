import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderApp = () => {
    root.render( 
        <BrowserRouter>
        <App state={store.getState()} addPost={store.addPost.bind(store)} changeProfileInput = {store.changeProfileInput.bind(store)}/>
        </BrowserRouter>);
}

renderApp();

store.subscribe(renderApp);

reportWebVitals();
