import React from 'react';
import { aMenuItems } from '../../interface/menu-items';
import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router';
import { Layout } from '../core/layout';

function App() {
    const LoginPage = React.lazy(() => import('../../pages/login'));
    const SelectorPage = React.lazy(() => import('../../pages/selector'));

    const DetailsPage = React.lazy(() => import('../../pages/details'));

    const HomePage = React.lazy(() => import('../../pages/home'));
    const FavoritsPage = React.lazy(() => import('../../pages/favorits'));

    const options: aMenuItems = [
        { path: '', label: 'Login', page: <LoginPage></LoginPage> },
        {
            path: '/selector',
            label: 'Selector',
            page: <SelectorPage></SelectorPage>,
        },

        {
            path: '/details',
            label: 'Details',
            page: <DetailsPage></DetailsPage>,
        },
        { path: '/home', label: 'Home', page: <HomePage></HomePage> },
        {
            path: '/favorites',
            label: 'Favorites',
            page: <FavoritsPage></FavoritsPage>,
        },
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
