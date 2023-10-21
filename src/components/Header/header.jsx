import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../assets/logo.svg"
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Button } from "../../shared/UI/Button/Button";



export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '5') {
      setOpen(false);
    }
  };
  const mika = {
    name: 'aidana',
    age: '25'

  }
  const name = mika

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const items = [
    {
      label: 'Основы Программирования',
      key: '1',
    },
    {
      label: 'Frontend Разработчик',
      key: '2',
    },
    {
      label: 'Python Разработчик',
      key: '3',
    },
    {
      label: 'Java Разработчик',
      key: '4',
    },
    {
      label: 'UX/UI Дизайнер',
      key: '5',
    },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <img className={styles.header__logo} src={logo} alt="logo" />
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
            <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/home">Главная</Link></li>
              <li className={styles.header__item}> <Dropdown
                menu={{ items, onClick: handleMenuClick, }}
                onOpenChange={handleOpenChange} open={open}>
                <Link className={`${styles.header__link} desctiption`} to="/courses" >
                  <Space>
                    Курсы
                  </Space>
                </Link>
              </Dropdown></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/library">Библиотека</Link></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/reviews">Отзывы</Link></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/graduate">Выпускники</Link></li>
            </ul>
          </nav>

          <div className={styles.header__buttons}>
            <div>
              <Link className={styles.header__btn} to="/entrance">Login</Link>
            </div>
            <div>
              <Link className={styles.header__btn} to="/singup">Sign up</Link>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};
