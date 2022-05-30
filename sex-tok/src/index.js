import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render( 
<BrowserRouter>
<App state={state} addPost={addPost}/>
</BrowserRouter>);

reportWebVitals();
