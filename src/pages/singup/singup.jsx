import React, { useState } from 'react';
import styles from "./singup.module.scss"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import img from '../../images/singup.form.png'
export const SingUp = () => {

    const [eye, setEye] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { userInfo } = useSelector(state => state.user);
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {

        dispatch(postUser(values));
        // if (userInfo == null) {
        //     navigate("/entrance");
        // }
        console.log(values);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
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
                            (<AiOutlineEyeInvisible className={styles.icon}  onClick={() => setEye(!eye)} />)
                    }
                    </div>
                  
                    <button type='submite'>Регистрация</button>
                </div>
                <div className={styles.form_img}>
<img className={styles.img} src={img} alt='img'/>
                </div>
                </div>
             

            </form>
        </>
    )
}

