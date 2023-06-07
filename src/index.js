import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FormProvider} from './context/formContext'
import {UpdateProvider} from './context/updateContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormProvider>
  <UpdateProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </UpdateProvider>
  </FormProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

