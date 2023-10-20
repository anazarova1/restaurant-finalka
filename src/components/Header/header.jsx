import styles from "./header.module.scss";

import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"



export const Header = () => {


  // i18n
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  // DropDownMenu

  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '5') {
      setOpen(false);
    }
  };

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
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/">{t("header.link1")}</Link></li>
              <li className={styles.header__item}>
                <Dropdown
                  menu={{ items, onClick: handleMenuClick, }}
                  onOpenChange={handleOpenChange} open={open}>
                  <Link className={`${styles.header__link} desctiption`} to="/courses" >
                    <Space>
                      {t("header.link2")}
                    </Space>
                  </Link>
                </Dropdown></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/library">{t("header.link3")}</Link></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/reviews">{t("header.link4")}</Link></li>
              <li className={styles.header__item}><Link className={`${styles.header__link} description`} to="/graduate">{t("header.link5")}</Link></li>
            </ul>
          </nav>

          <div className={styles.lang} >
            <div className={styles.langContent}>
              <p className={`${i18n.language === "ru" ? "active" : ""} activeLang`} onClick={() => changeLanguage("ru")}>RU</p>
            </div>

            <div className={styles.langContent}>
              <p className={`${i18n.language === "en" ? "active" : ""} activeLang`} onClick={() => changeLanguage("en")}>EN</p>
            </div>
          </div>


          <div className={styles.header__buttons}>
            <div>
              <Link className={styles.header__btn} to="/entrance">Login</Link>
            </div>
            <div>
              <Link className={styles.header__btn} to="/entrance">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </header >
  );
};
