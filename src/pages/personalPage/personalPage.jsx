import styles from "./pesonalPage.module.scss"
// import { BsPersonBoundingBox } from "react-icons/bs"
// import { BiMessageRoundedDots } from "react-icons/bi"
import { addStudens } from "../../store/actions/";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { useState } from "react";


export const PersonalPage = () => {
    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);
    const { register, handleSubmit } = useForm({
        defaultValues: userInfo
    });
    const onSubmit = (values) => {
        dispatch(addStudens(values))
        console.log(values);
    }

    const handlechangePhoto = (e) => {
        const fileList = e.target.files;
        const urlPhoto = URL.createObjectURL(fileList[0]);
        setPhoto(urlPhoto);
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
                <div className={styles.content_page}>
                    <div className={styles.page_file}>
                        <div className={styles.user_img}>
                            <img src={photo} className={styles.img}/>
                        </div>
                        <input type="file"  {...register('photo')} onChange={handlechangePhoto} />
                        <input className={styles.input} type="text" placeholder="id..." {...register('id')} />
                        <input className={styles.input} type="text" placeholder="введите свое имя.." {...register('name')} />
                        <input className={styles.input} type="text" placeholder="введите фамилию.." {...register('last_name')} />
                        <input className={styles.input} type="text" placeholder="ваш возраст.." {...register('age')} />
                       
                        <input className={styles.input} type="email" placeholder="Введите email.." {...register('email')} />
                      
                        <input className={styles.input} type="text" placeholder="Образование.." {...register('eduation')} />
                        </div>

                        <div className={styles.personal_page2}>
                        <input className={styles.input_win} type="text" placeholder="О себе.." {...register('bio')} />
                        <input className={styles.input_win} type="text" placeholder="Достижения.." {...register('arhivments')} />
                        <input className={styles.input_win} type="text" 
                        placeholder="наименование курсов.." {...register('course')} />
    <div className={styles.page_button}>
                    <button>сохранить</button>
                    <button>изменить</button>
                </div>
                        </div>
                       
                    
                   
{/*                     
                    <div className={styles.personal_img}>
                        <img  className={styles.personale_page} src={personal_page} alt="personal"/>
                    </div> */}
              
                    </div>
                </div>
               
        
            </form>
        </>
    )
}


