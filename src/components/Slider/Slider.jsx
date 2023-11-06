import styles from "./Slider.module.scss"
import React from 'react';
import { Carousel } from 'antd';
import image1 from "../../assets/carousel/01.jpg"
import image2 from "../../assets/carousel/02.jpg"
import image3 from "../../assets/carousel/03.jpg"
import image4 from "../../assets/carousel/04.jpg"
import image5 from "../../assets/carousel/05.jpg"

export const Slider = () => {
    return (
        <>
            <div className="container">
                <div className={styles.carousel_content}>
                    <Carousel autoplay>
                        <div className={styles.contentStyle}>
                            <div className={styles.carousel_flex}>
                                <div className={styles.carousel_image}>
                                    <img src={image1} alt="image1" />
                                    </div>
                                <div className={styles.carousel_title}>
                                    <h2>Лучшие рестораны Бишкека</h2>
                                    <h2>Выбери и забронируй</h2>
                                    </div>

                            </div>
                        </div>
                        <div className={styles.contentStyle}>
                            <div className={styles.carousel_flex}>
                                <div className={styles.carousel_image}>
                                <img src={image2} alt="image2" />
                                </div>
                                <div className={styles.carousel_title}>
                                <h2>Лучшие рестораны Бишкека</h2>
                                <h2>Выбери и забронируй</h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentStyle}>
                            <div className={styles.carousel_flex}>
                            <div className={styles.carousel_image}>
                                <img src={image3} alt="image3" />
                                </div>
                                <div className={styles.carousel_title}>
                                <h2>Лучшие рестораны Бишкека</h2>
                                <h2>Выбери и забронируй</h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentStyle}>
                            <div className={styles.carousel_flex}>
                            <div className={styles.carousel_image}>
                                <img src={image4} alt="image4" />
                                </div>
                                <div className={styles.carousel_title}>
                                <h2>Лучшие рестораны Бишкека</h2>
                                <h2>Выбери и забронируй</h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentStyle}>
                            <div className={styles.carousel_flex}>
                            <div className={styles.carousel_image}>
                                <img src={image5} alt="image5" />
                                </div>
                                <div className={styles.carousel_title}>
                                <h2>Лучшие рестораны Бишкека</h2>
                                <h2>Выбери и забронируй</h2>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>
        </>
    )
}