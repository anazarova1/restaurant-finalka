import styles from "./header.module.scss";

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logoAN.png"
import { useDispatch, useSelector } from "react-redux";
import {LiaMapMarkerSolid} from "react-icons/lia"


export const Header = () => {

  const dispatch = useDispatch();
  const userInfo  = useSelector((state) => state.users);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };








  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.flex}>
          <Link to="/slider" ><img className={styles.header__logo} src={logo} alt="logo" /></Link>
          <div className={styles.marker}>
            <LiaMapMarkerSolid></LiaMapMarkerSolid>
          <p>Бишкек</p>
            </div>
          </div>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}><Link className={styles.header__link} to="/restaurants">Рестораны</Link></li>
              <li className={styles.header__item}><Link className={styles.header__link} to="/banquets">Банкеты</Link></li>
              <li className={styles.header__item}><Link className={styles.header__link} to="/news">Новости</Link></li>
              <li className={styles.header__item}><Link className={styles.header__link} to="/recipes">Рецепты</Link></li>
            </ul>
          </nav>

        


          <div className={styles.header__buttons}>
            <div>
              <Link className={styles.header__btn} to="/login">Вход</Link>
            </div>
            <div>
              <Link className={styles.header__btn} to="/singup">Регистрация</Link>
            </div>
          </div>

        </div>
      </div>
    </header >
  );
};
