import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
//Alert for Msg in react
import { positions, transitions, Provider as Alertprovider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transitions: transitions.SCALE,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Alertprovider template={AlertTemplate}{...options}>
        <App />
      </Alertprovider>
    </BrowserRouter>
  </Provider>

);

reportWebVitals();
