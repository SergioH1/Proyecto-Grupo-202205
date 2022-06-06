import React from 'react';
import { aMenuItems } from '../../interface/menu-items';
import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router';
import { Layout } from '../core/layout';

function App() {
    const LoginPage = React.lazy(() => import('../../pages/login'));
    const options: aMenuItems = [
        { path: '', label: 'Login', page: <LoginPage></LoginPage> },
    ];
    return (
        <>
            <Layout>
                <Routes>
                    {options.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </Layout>
        </>
    );
}

export default App;
