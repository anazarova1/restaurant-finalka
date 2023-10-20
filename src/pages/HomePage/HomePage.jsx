import React from 'react';
import styles from "./HomePage.module.scss";
import { BsLightningChargeFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { BsFilePlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import platformImage from "../../images/HomeImages/platform2.png"
import learnImage from "../../images/HomeImages/learn.png"
import { Carousel } from 'antd';
import { SiPhp } from "react-icons/si"
import { DiPython } from "react-icons/di"
import { BiLogoJava } from "react-icons/bi"
import { DiJavascript } from "react-icons/di"
import improveImage from "../../images/HomeImages/improve.png"
import watchImage from "../../images/HomeImages/watch.png"
import javaImage from "../../images/HomeImages/java.svg"
import pythonSvg from "../../images/HomeImages/pythonSvg.svg"

export const HomePage = () => {
    return (
        <div className={styles.home}>
            <section className={styles.platform}>
                <div className="container">
                    <div className={styles.platform__wrapper}>
                        <div className={styles.platform__content}>
                            <h3 className={`${styles.platform__subtitle} subtitle`}>IT-COURSES PLATFORM</h3>
                            <h1 className={`${styles.platform__title} title`}>Learning and
                                teaching online,
                                made easy.</h1>
                            <p className={`${styles.platform__description} description`}>Practice your Skills and learn coding with IT-Academy.</p>

                            {/* <div className={styles.btnwrapper}>
                                <Link className={styles.animation} href="">
                                    <span>Courses</span>
                                    <div className={styles.liquid}></div>
                                </Link>
                            </div> */}

                            <button className={`${styles.platform__button} button`}>
                                <Link to="/courses" className={`${styles.platform__buttonLink} buttonLink`}>About courses</Link>
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
                    </div>
                </div>
            </section>

            <section className={styles.learn}>
                <div className="container">
                    <div className={styles.learn__content}>
                        <div>
                            <img className={styles.learImage} src={learnImage} alt="image" />
                        </div>

                        <div className={styles.learn__text}>
                            <h2 className={`${styles.learn__title} title`}>What you will learn in courses</h2>
                            <p className={`${styles.learn__description} description`}>Progress independently by looking for additionally  information </p>

                            <div className={styles.carouselBlock}>
                                <Carousel style={{ width: 200, height: 200 }} autoplay>
                                    <div className={styles.learnIcons}>
                                        <SiPhp className={styles.PhpSvg} />
                                        <p className={`${styles.learnIcons__description} ${styles.php}`}>PHP</p>
                                    </div>
                                    <div className={styles.learnIcons}>
                                        {/* <DiPython className={styles.PythonSvg} /> */}
                                        <img className={styles.PythonSvg} src={pythonSvg} alt="" />
                                        <p className={`${styles.learnIcons__description} ${styles.python}`}>Python</p>
                                    </div>
                                    <div className={styles.learnIcons}>
                                        {/* <BiLogoJava  className={styles.JavaSvg} /> */}
                                        <img className={styles.JavaSvg} src={javaImage} alt="" />
                                        <p className={`${styles.learnIcons__description} ${styles.java}`}>Java</p>
                                    </div>
                                    <div className={styles.learnIcons}>
                                        <DiJavascript className={styles.JsSvg} />
                                        <p className={`${styles.learnIcons__description} ${styles.javascript}`}>JavaScript</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.improveSkills}>
                <div className="container">
                    <div className={styles.improveSkills__content}>
                        <div className={styles.improveSkills__text}>
                            <h2 className={`${styles.improveSkills__title} title`}>Improve your skills</h2>
                            <p className={`${styles.improveSkills__description} description`}>Traditional and new effective approaches to word study</p>
                            {/* <div className={styles.btnwrapper}>
                                <Link className={styles.animation} href="">
                                    <span>button</span>
                                    <div className={styles.liquid}></div>
                                </Link>
                            </div> */}
                            <button className={`${styles.improveSkills__button} button`}>
                                <Link to="/courses" className={`${styles.improveSkills__buttonLink} buttonLink`}>About courses</Link>
                            </button>
                        </div>
                        <div>
                            <img className={styles.improveSkills__img} src={improveImage} alt="image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.watch}>
                <div className="container">
                    <div className={styles.watch__content}>
                        <div>
                            <img className={styles.watch___img} src={watchImage} alt="image" />
                        </div>
                        <div className={styles.watch___text}>
                            <h2 className={`${styles.watch___title} title`}>Watch your progress every day</h2>
                            <p className={`${styles.watch___description} description`}>Save statistics on your achievements, words learned, and mistakes</p>
                            <button className={`${styles.watch__button} button`}>
                                <Link to="/courses" className={`${styles.watch__buttonLink} buttonLink`}>About courses</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    );
};


