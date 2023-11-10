import React, { useEffect, useState } from 'react';
import styles from "./CardRestaurant.module.scss";
import { Card } from 'antd';
import { LiaMapMarkerSolid } from "react-icons/lia"
import { PiStarDuotone } from "react-icons/pi"
import { GiCook } from "react-icons/gi"
import { Button, Modal } from 'antd';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getRestaurants, postReserv } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from '../../shared/privateRoute/PrivateRoute';
import { useForm } from 'react-hook-form';

export const CardRestaurant = (props) => {
    const [startDate, setStartDate] = useState(new Date())
    const { Meta } = Card;
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (reserv, restaurant) => {
        dispatch(postReserv({ ...reserv, name: restaurant.name, address: restaurant.address }))
    }
    const { restaurants } = useSelector((state) => state.restaurants)
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])
    return (
        <>
            <div className='container'>
                <div className={styles.cards}>
                    <div className={styles.cardContainer}>
                        {
                            restaurants?.map((restaurant) => (
                                <Card className={styles.card}
                                    hoverable cover={<img className={styles.card_img} src={restaurant.image} alt="Картинка" />}>
                                    <h2>{restaurant.name}</h2>
                                    <div className={styles.card_marker}>
                                        <div >
                                            <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                        </div>
                                        <p>{restaurant.address}</p>
                                    </div>
                                    <div className={styles.card_marker}>
                                        <div>
                                            <PiStarDuotone></PiStarDuotone>
                                        </div>
                                        <p>{restaurant.points}</p>
                                    </div>
                                    <h2>{restaurant.check}</h2>
                                    <div className={styles.card_marker}>
                                        <div>
                                            <GiCook></GiCook>
                                        </div>
                                        <p>{restaurant.kitchen}
                                        </p>
                                    </div>
                                    <div className={styles.card_button_flex}>
                                        <button className={styles.submit_button} type="primary" onClick={showModal}
                                        >Забронировать
                                        </button>
                                    </div>
                                    <Modal
                                        open={open}
                                        title="Бронирование столика"
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={[]}>
                                        <h2>{restaurant.name}</h2>
                                        <div className={styles.card_marker}>
                                            <div>
                                                <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                            </div>
                                            <p>{restaurant.address}</p>
                                        </div>
                                        <form onSubmit={handleSubmit((values) => onSubmit(values, restaurant))} className={styles.calendar}>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                showTimeSelect
                                                dateFormat="MMMM d, yyyy h:mm aa" />
                                            <input type='number' placeholder='Количество гостей' {...register("count")} />
                                            <input type='name' placeholder='Имя' {...register("name")} />
                                            <input type='name' placeholder='Фамилия' {...register("surname")} />
                                            <input type='text' placeholder='Телефон' {...register("number")} />
                                            <p>Пожелания к брони</p>
                                            <input className={styles.calendar_big_input} type='text' placeholder='' />
                                            <PrivateRoute>
                                                <button type='submit' className={styles.submit_button} loading={loading}>Submit</button>
                                            </PrivateRoute>
                                        </form>
                                    </Modal>
                                </Card>
                            ))
                        }
                    </div>

                </div>
            </div>

        </>
    )
}