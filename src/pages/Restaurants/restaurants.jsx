import React, { useEffect } from 'react';
import styles from "./restaurants.module.scss";
// import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { CardResto } from '../../components/CardsResto';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../store/actions';

export const Restaurants = () => {
    // const [startDate, setStartDate] = useState(new Date())

    const image = require('../../assets/restoran/frunze.jpg');
    const image1 = require('../../assets/restoran/niko.jpg')
    const image2 = require('../../assets/restoran/cyclone.jpg')
    const image3 = require('../../assets/restoran/caption.jpg')
    const image4 = require('../../assets/restoran/barviha.jpg')
    const image5 = require('../../assets/restoran/usta.jpg')
    const image6 = require('../../assets/restoran/nar.jpg')
    const image7 = require('../../assets/restoran/barashek.jpg')
    const image8 = require('../../assets/restoran/ugolek.jpg')

    // const dispatch = useDispatch()
    // const { restaurants  } = useSelector((state) => state.restaurants)

    // useEffect(() => {
    //     dispatch(getRestaurants())
    // }, [])
    
    return (
        <>

            <div className="container">
                <div className={styles.cards}>
                    <CardResto
                         image={image}
                         name='Frunze'
                         address='​​Абдумомунова, 220а​​'
                         points='3,9'
                         check='Средний чек 3500 с'
                         kitchen='​​Восточная кухня ​Халяльная кухня'
                    />
                    <CardResto
                        image={image1}
                        name='Niko'
                        address='​Орозбекова, 51​'
                        points='4,7'
                        check='Средний чек 1800 с'
                        kitchen='​Грузинская кухня ​Европейская кухня'
                    />
                    <CardResto
                        image={image2}
                        name='Cyclone'
                        address='​​Проспект Чуй, 136​'
                        points='4,2'
                        check='Средний чек 1100 с'
                        kitchen='​​Винный ресторан ​Итальянская кухня'
                        
                    />
                    <CardResto
                        image={image3}
                        name='Navigator'
                        address='​Московская, 103​'
                        points='3,7'
                        check='Средний чек 1500с'
                        kitchen='​Японская кухня Eвропейская кухня​​'
                    />

                    <CardResto
                        image={image4}
                        name='Барвиха Resto&Bar'
                        address='​Орозбекова 62​'
                        points='4'
                        check='Средний чек 1700с'
                        kitchen='​Итальянская кухня Eвропейская кухня ​' 
                    />
                    <CardResto
                        image={image5}
                        name='Usta Turkish '
                        address='​Токомбаева, 25​​​'
                        points='3,6'
                        check='Средний чек 2500с'
                        kitchen='​Халяльная кухня​Турецкая кухня​​'
                    />
                    <CardResto
                        image={image6}
                        name='Nar'
                        address='ул.Орозбекова, 51​​'
                        points='3,7'
                        check='Средний чек 1800с'
                        kitchen='Восточноевропейская Азербайджанская​​'
                    />
                    <CardResto
                        image={image7}
                        name='Barashek'
                        address='Микрорайон Асанбай, 78Б​​'
                        points='4,2'
                        check='Средний чек 3500с'
                        kitchen='Восточная кухня в современной подаче ​​'
                    />
                    <CardResto
                        image={image8}
                        name='Ugolөk '
                        address='​Орозбекова, 51​​​'
                        points='4,5'
                        check='Средний чек 1500с'
                        kitchen='​Грузинская кухня​Европейская кухня​​'
                    />
               
                </div>
            </div>
        </>
    );
};

