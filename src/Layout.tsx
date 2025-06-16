import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function NavWrapper() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="nav-wrapper">
                    <Header />
                    <Outlet />
                </div>
            </Suspense>
        </>
    );
}