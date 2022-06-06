import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/app/App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> main
import { PrisionerContextProvider } from './context/prisioner-provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
<<<<<<< HEAD
        <PrisionerContextProvider>
            <App />
        </PrisionerContextProvider>
=======
        <BrowserRouter>
            <PrisionerContextProvider>
                <App />
            </PrisionerContextProvider>
        </BrowserRouter>
>>>>>>> main
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
