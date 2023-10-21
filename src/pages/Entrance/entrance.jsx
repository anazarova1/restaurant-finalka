import React, {useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import styles from "./entrance.module.scss"
import { useNavigate } from 'react-router';


export const Entrance = () => {
    const [eye, setEye] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.user);
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        dispatch(login(values))
        if (userInfo!== null) {
            navigate("/personalPage");
        }
        console.log(values);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type='username' placeholder='username' {...register('username')} />
                <input type={eye ? 'text' : 'password'}
                    placeholder='password'{...register('password')}
                />
                {
                    eye ?
                        (<AiOutlineEye onClick={() => setEye(!eye)} />) :
                        (<AiOutlineEyeInvisible onClick={() => setEye(!eye)} />)
                }
                <button type='submite'>Вход</button>
            </form>
        </>
    )
}

