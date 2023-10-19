import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import { useEffect } from "react";
import { Header } from '../../../components/Header/header';

export const Layout = ({ children }) => {

        useEffect(() => {
            window.scrollTo(0,0);
        }, []);
        return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
        </div>
    );
};
