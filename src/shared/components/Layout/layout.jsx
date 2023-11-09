import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import { useEffect } from "react";


import '../../../i18n'
import { Footer, Header } from '../../../components';


export const Layout = () => {

        useEffect(() => {
            window.scrollTo(0,0);
        }, []);
        return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer/>
           
        </div>
    );
};
