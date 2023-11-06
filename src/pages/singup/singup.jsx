import React, { useState } from 'react';
import styles from "./singup.module.scss"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/userActions';
import { useNavigate } from 'react-router';
import img from '../../assets/rezerverd1.jpg'



export const SingUp = () => {
    const [eye, setEye] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const  userInfo = useSelector(state => state.users);

    const onSubmit = (values) => {
        dispatch(registerUser(values));
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [userInfo])


return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.bg_img}>
            <div className={styles.form_styles_row}>
                <div className={styles.form_style}>
                    <input type='email' placeholder='email' {...register('email')} />
                    <input type='username' placeholder='username' {...register('username')} />
                    <div className={styles.flex_row}>
                        <input type={eye ? 'text' : 'password'}
                            placeholder='password'{...register('password')}

                        />
                        {
                            eye ?
                                (<AiOutlineEye className={styles.icon} onClick={() => setEye(!eye)} />) :
                                (<AiOutlineEyeInvisible className={styles.icon} onClick={() => setEye(!eye)} />)
                        }
                    </div>

                    <button type='submite'>Регистрация</button>
                </div>
                <div className={styles.form_img}>
                    <img className={styles.img} src={img} alt='img' />
                </div>
            </div>
            </div>
           


        </form>
    </>
)
                    }
