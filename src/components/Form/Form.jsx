import { useState } from "react";

export const Form = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if(!re.test(String(e.target.value).toLowerCase())){
setEmailError ('Некорректный email...')
}
else {
    setEmailError('')
}
    }

    const passwordHandler =(e) =>{
        setPassword(e.target.value)
        if(
            e.target.value.length < 3 || e.target.value.length > 8){
                setPasswordError('Пароль должен быть больше 3 и меньше 8')
        }if(!e.target.value){
            passwordError('Пароль не может быть пустым')
        }
        else{
            passwordError('')
        }
    }

const blurHandler = (e) => {
    switch (e.target.name) {
        case'email':
        setEmailDirty(true)
        break
        case 'password':
            setPasswordDirty(true)
            break
    }
}

    return(
        <>
         <form>
              <h2>Авторизация</h2>
              {(emailDirty && emailError) &&<div style={{color:'red'}}>{emailError}</div>}
              <input onChange={e => emailHandler(e)} value={email} onBlur={e = blurHandler(e)} name='email' type="text" placeholder="Введите свой email.."/>
              {(passwordDirty && passwordError) &&<div style={{color:'red'}}>{passwordError}</div>}

              <input onChange={e => passwordHandler(e)}  value={password}  onBlur={e = blurHandler(e)} name='пароль' type="password" placeholder="Введите свой пароль.."/>
              <button type="submit">Войти</button>
            </form>
        </>
    )
}

 