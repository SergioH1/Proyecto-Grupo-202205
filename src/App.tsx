import React from 'react';
import { PrisionerContextProvider } from '../src/context/prisioner-provider';
import './App.css';

function App() {
    return (
        <PrisionerContextProvider>
            <div className="App">
                <h1>Prision Daters</h1>
            </div>
        </PrisionerContextProvider>
    );
}

export default App;
