import React from 'react';
import styles from "./HomePage.module.scss";
import { BsLightningChargeFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { BsFilePlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import platformImage from "../../images/HomeImages/platform2.png"
import learnImage from "../../images/HomeImages/learn.png"
import { Carousel } from 'antd';
import youtubeImage from "../../images/HomeImages/youtube.png"





export const HomePage = () => {
    return (
        <div className={styles.home}>
            <div className="container platformContainer">
                <div className={styles.home__content}>
                    <section className={styles.platform}>
                        <div className={styles.platform__content}>
                            <h3 className={`${styles.platform__subtitle} subtitle`}>IT-COURSES PLATFORM</h3>
                            <h1 className={`${styles.platform__title} title`}>Learning and
                                teaching online,
                                made easy.</h1>
                            <p className={`${styles.platform__description} description`}>Practice your Skills and learn new things with IT-Academy.</p>

                            <button className={`${styles.platform__button} button`}>
                                <Link to="/courses" className={`${styles.platform__buttonLink} buttonLink`}>
                                    About courses
                                </Link>
                            </button>

                            <div className={styles.platform__indicators}>
                                <div className={styles.platform__indicatorsContent}>
                                    <div className={styles.platform__graduates}>
                                        <div className={styles.platform__graduatesQuantity}>
                                            <BsLightningChargeFill className={styles.platform__graduatesIcon} />
                                            <div className={styles.platform__graduatesNumber}>
                                                <p>300</p>
                                                <BiPlusMedical className={styles.platform__graduatesPlus} />
                                            </div>
                                        </div>
                                        <p className={styles.platform__text}>Graduates</p>
                                    </div>

                                    <div className={styles.platform__graduates}>
                                        <div className={styles.platform__lastFriday_quantity}>
                                            <div className={styles.platform__graduatesQuantity}>
                                                <BsFilePlusFill className={styles.platform__graduatesIcon} />
                                                <div className={styles.platform__graduatesNumber}>
                                                    <p>9</p>
                                                    <BiPlusMedical className={styles.platform__graduatesPlus} />
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.platform__text}>Last Friday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className={styles.platform__img} src={platformImage} alt="" />
                        </div>
                    </section>


                    <section className={styles.learn}>
                        <div className="container">
                            <div className={styles.learn__content}>
                                <div>
                                    <img src={learnImage} alt="image" />
                                </div>

                                <div className={styles.learn__text}>
                                    <h2 className={`${styles.learn__title} title`}>Use this platforms to learn more</h2>
                                    <p className={`${styles.learn__description} description`}>Progress independently by looking for additionally  information </p>

                                    <div className={styles.carouselBlock}>
                                        <Carousel style={{ width: 700, height: 700 }} autoplay>
                                            <div>
                                                
                                                <img className={styles.content} src="https://i.pinimg.com/564x/6b/bf/1e/6bbf1e4b5d3fc6c5bb114009380555ca.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className={styles.content} src="https://i.pinimg.com/564x/90/e1/f3/90e1f38590c46f729b97cf9fd6efa9b7.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className={styles.content} src="https://i.pinimg.com/564x/6b/bf/1e/6bbf1e4b5d3fc6c5bb114009380555ca.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className={styles.content} src="https://i.pinimg.com/564x/90/e1/f3/90e1f38590c46f729b97cf9fd6efa9b7.jpg" alt="" />
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
