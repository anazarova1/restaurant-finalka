import React, { useState } from 'react';
import styles from "./singup.module.scss"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../../store/actions';
import { useNavigate } from 'react-router';

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
                <div className={styles.form_style}>
                    <input type='email' placeholder='email' {...register('email')} />
                    <input type='username' placeholder='username' {...register('username')} />
                    <input type={eye ? 'text' : 'password'}
                        placeholder='password'{...register('password')}

                    />
                    {
                        eye ?
                            (<AiOutlineEye onClick={() => setEye(!eye)} />) :
                            (<AiOutlineEyeInvisible onClick={() => setEye(!eye)} />)
                    }
                    <button type='submite'>Регистрация</button>
                </div>

            </form>
        </>
    )
}

