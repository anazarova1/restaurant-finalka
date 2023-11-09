import styles from "./cardBanquets.module.scss"
import React from 'react';
import { Card } from 'antd';
import { LiaMapMarkerSolid } from "react-icons/lia"
import { MdPeopleOutline } from "react-icons/md"
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi"
import { GiCook } from "react-icons/gi"
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { BsPeople } from "react-icons/bs"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export const CardBanquets = (props) => {
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
    return (<>
        <div className='container'>
                <div className={styles.cards}>
                    <div className={styles.cardContainer}>
                        <Card className={styles.card}
                            hoverable cover={<img className={styles.card_img} src={props.image} alt="Картинка" />}>
                            <h2 className={styles.props_name}>{props.name}</h2>
                            <div className={styles.card_marker}>
                                <div >
                                    <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                </div>
                                <p>{props.address}</p>
                            </div>
                            <div className={styles.card_marker}>
                                <div>
                                    <MdPeopleOutline className={styles.card_icons}></MdPeopleOutline>
                                </div>
                                <h2>{props.peoples}</h2>
                            </div>
                            <div className={styles.card_marker}>
                                <div>
                                    < PiCurrencyCircleDollarDuotone className={styles.card_icons}></PiCurrencyCircleDollarDuotone>
                                </div>
                                <h2>{props.check}</h2>
                            </div>
                            <div className={styles.card_button_flex}>
                                <button className={styles.card_button} type="primary" onClick={showModal}
                                >Забронировать
                                </button>
                            </div>
                            <Modal
                                open={open}
                                title="Бронирование столика"
                                onOk={handleOk}
                                onCancel={handleCancel}
                                footer={[
                                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                                        Submit
                                    </Button>
                                ]}>
                                <h2>{props.name}</h2>
                                <div className={styles.card_marker}>
                                    <div>
                                        <LiaMapMarkerSolid></LiaMapMarkerSolid>
                                    </div>
                                    <p>{props.adres}</p>
                                </div>
                                <div className={styles.calendar}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect

                                        dateFormat="MMMM d, yyyy h:mm aa" />
                                    {/* <BsPeople></BsPeople> */}
                                    <input type='number' placeholder='Количество гостей' />
                                    <input type='name' placeholder='Имя' />
                                    <input type='name' placeholder='Фамилия' />
                                    <input type='text' placeholder='Телефон' />
                                    <input type='email' placeholder='email' />
                                    <p>Пожелания к брони</p>
                                    <input className={styles.calendar_big_input} type='text' placeholder='' />
                                </div>
                            </Modal>
                        </Card>
                    </div>

                </div>

        </div>
    </>
    )
}