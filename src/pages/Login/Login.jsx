import React, {useEffect, useState,  } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Login.module.scss"
import { useNavigate } from 'react-router';
import img_2 from '../../assets/rezerverd1.jpg'
import { loginUser } from '../../store/actions';

export const Login = () => {
    const [eye, setEye] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const  userInfo  = useSelector((state) => state.users);

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [userInfo]);
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.form_styles_row}>
              <div className={styles.transparent}>
              <div className={styles.form_img}>
            {/* <video autoPlay loop video>
        <source src={video} type="video" />
      </video> */}
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
                </div>
            </form>
            
        </>
    )
            }

