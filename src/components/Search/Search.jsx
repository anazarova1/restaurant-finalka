import { useDispatch, useSelector } from "react-redux"
import styles from "./Search.module.scss"
// import { useEffect } from "react"
// import { getRecipes } from "../../store/actions"
import { Input, Button } from 'antd';
import { useState } from "react";


export const Search = (props) => {

    const [value, setValue] = useState('');
    const handleSubmit = () => {
       props.onSearch(value) ;
    }
    const handleChange = (event) => {
        setValue(event.target.value)
        
    }
    return (
        <form className={styles.flex}>
             
            <input  className={styles.input} placeholder="Введите название ресторана" onChange={handleChange} value={value}/>
            <button className={styles.btn} onClick={handleSubmit} type="primary">Поиск</button>
       

        </form>

    )
}