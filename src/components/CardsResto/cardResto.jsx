import React from 'react';
import styles from "./cardRasto.module.scss";
import { Card } from 'antd';
import { LiaMapMarkerSolid } from "react-icons/lia"
import { PiStarDuotone } from "react-icons/pi"
import { GiCook } from "react-icons/gi"
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { BsPeople } from "react-icons/bs"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { postReserv } from '../../store/actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../../shared/privateRoute/PrivateRoute';

export const CardResto = (props) => {
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

    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    console.log(props);

    const onSubmit = (reserv) => {
        dispatch(postReserv({...reserv, name: props.name, address: props.adres}))

    }
    return (
        <>
            <div className='container'>
                <div className={styles.cards}>
                    <div className={styles.cardContainer}>
                        <Card className={styles.card}


                            hoverable cover={<img className={styles.card_img} src={props.image} alt="Картинка" />}>
                            <h2>{props.name}</h2>
                            <div className={styles.card_marker}>
                                <div >
                                    <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                </div>
                                <p>{props.address}</p>
                            </div>
                            <div className={styles.card_marker}>
                                <div>
                                    <PiStarDuotone></PiStarDuotone>
                                </div>
                                <p>{props.points}</p>
                            </div>
                            <h2>{props.check}</h2>
                            <div className={styles.card_marker}>
                                <div>
                                    <GiCook></GiCook>
                                </div>
                                <p>{props.kitchen}
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
                                <h2>{props.name}</h2>
                                <div className={styles.card_marker}>
                                    <div>
                                        <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                    </div>
                                    <p>{props.address}</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className={styles.calendar}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect

                                        dateFormat="MMMM d, yyyy h:mm aa" />
                                    {/* <BsPeople></BsPeople> */}
                                    
                                    <input type='number' placeholder='Количество гостей' {...register("count")} />
                                    <input type='name' placeholder='Имя' {...register("name")}/>
                                    <input type='name' placeholder='Фамилия' {...register("surname")}/>
                                    <input type='text' placeholder='Телефон' {...register("number")}/>
                                    <p>Пожелания к брони</p>
                                    <input className={styles.calendar_big_input} type='text' placeholder='' />
                                    <PrivateRoute>
                                    <button  type='submit' className={styles.submit_button} loading={loading}>Submit</button>
                                    </PrivateRoute>
                                    </form>   
                            </Modal>
                        </Card>
                    </div>
                </div>



         


            </div>

        </>
    )
}