import React, {useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions';
import styles from "./entrance.module.scss"
import { useNavigate } from 'react-router';
import img_2 from '../../images/login.form.png'

export const Entrance = () => {
    const [eye, setEye] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { userInfo } = useSelector(state => state.user);
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        dispatch(login(values))
        // if (userInfo!== null) {
        //     navigate("/personalPage");
        // }
        console.log(values);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.form_styles_row}>
            <div className={styles.form_img}>
<img className={styles.img} src={img_2} alt='img'/>
                </div>
                <div className={styles.form_style}>
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
                <button type='submite'>Вход</button>
                </div> 

                </div>
             
            </form>
            
        </>
    )
}

