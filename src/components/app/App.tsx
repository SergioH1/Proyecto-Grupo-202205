import React from 'react';
import { aMenuItems } from '../../interface/menu-items';
import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router';
import { Layout } from '../core/layout';

function App() {
    const LoginPage = React.lazy(() => import('../../pages/login'));
    const SelectorPage = React.lazy(() => import('../../pages/selector'));
    const HomePage = React.lazy(() => import('../../pages/home'));
    const options: aMenuItems = [
        { path: '/login', label: 'Login', page: <LoginPage></LoginPage> },
        {
            path: '/selector',
            label: 'Selector',
            page: <SelectorPage></SelectorPage>,
        },
        { path: '/home', label: 'Home', page: <HomePage></HomePage> },
    ];
    return (
        <>
            <Layout options={options}>
                <React.Suspense>
                    <Routes>
                        {options.map((item) => (
                            <Route
                                key={item.label}
                                path={item.path}
                                element={item.page}
                            ></Route>
                        ))}
                    </Routes>
                </React.Suspense>
            </Layout>
        </>
    );
}

export default App;
