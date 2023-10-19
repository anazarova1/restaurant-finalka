import React, { useEffect, useState } from 'react';
import styles from "./entrance.module.scss"

export const Entrance = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('email  Не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль Не может быть пустым')
const [formValid, setFormValid] = useState (false);

 useEffect (() => {
if(emailError || passwordError){
setFormValid(false)
} else{
    setFormValid(true)
}
}, [emailError, passwordError])

const emailHandle = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())){
        setEmailError('Некорректный email')
    }
    else{
        setEmailError('')
    }
}

const passwordHandler = (e) =>{
    setPassword(e.target.value) 
    if(e.target.value.length < 3 || e.target.value.length > 8){
        setPasswordError('пароль должен быть больше 3 и меньше 8 символов')
    }if(!e.target.value){
        setPasswordError('пароль Не может быть пустым')

    }
else{
    setPasswordError('')
}
}

    const blurHandle = (e) => {
        switch(e.target.name){
            case 'email': setEmailDirty(true)
            break
        case 'password': setPasswordDirty(true)
        break
        }
    }

    return (
        <>
            <div className={styles.entrance}>
                <form className={styles.display}>
                    <h2>
                        Вход
                    </h2>
                    {(emailDirty && emailError && <div style={{color: 'red'}}>{emailError}</div>)}
                    <input onChange={e => emailHandle(e)} onBlur={e => blurHandle(e)} name='email' type='text' placeholder='Введите совй email...'/>
                    {(passwordDirty && passwordError && <div style={{color: 'red'}}>{passwordError}</div>)}

                    <input onChange={e => passwordHandler(e)} onBlur={e => blurHandle(e)} name='password' type='password' placeholder='Введите свой пароль'/>
                    <button disabled={!formValid} type='submit'>Вход</button>
                </form>

            </div>

        </>
    )
}
