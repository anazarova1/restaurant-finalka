import React, { useEffect } from 'react';
import styles from "./restaurants.module.scss";

import "react-datepicker/dist/react-datepicker.css";
import { CardRestaurant } from '../../components/CardRestaurant';

export const Restaurants = (props) => {
  
    return (
        <>
            <div className='container'>
                <div className={styles.cards}>
                <h2 className={styles.restaurant_title }>Выбери и забронируй столик в лучших ресторанах нашего орода</h2>

                    <CardRestaurant/>   
                </div>
            </div>

        </>
    )
}