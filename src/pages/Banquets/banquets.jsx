import { CardBanquets } from "../../components/cardBanquets/cardBanquets"
import styles from "./banquets.module.scss"
import video from "../../assets/banquets/alatoo.jpg"
import { PiInstagramLogoDuotone, PiTelegramLogoDuotone } from "react-icons/pi"
import { AiOutlineFacebook } from "react-icons/ai"

export const Banquets = () => {
    const image = require('../../assets/banquets/alatoo.jpg')
    const image1 = require('../../assets/banquets/jannat.jpg')

    return (
        <>
            <div className="container">
                <div className={styles.banquet_page}>
                    <h2 className={styles.title}>Выбери и забронируй Бакетный зал для своего Мероприятия!</h2>
                    <div className={styles.banquet_page_content}>
                        <div className={styles.cards}>
                            <CardBanquets
                                image={image}
                                name='Ala-Too'
                                address="Малдыбаева, 54/1​"
                                peoples=" Вместимость до 500 человек"
                                check="средний чек на 1 персону от 2000 с"
                            />
                            <CardBanquets
                                image={image1}
                                name='Jannat'
                                address="ул.Аалы Токомбаева 21/2​"
                                peoples=" Вместимость до 400 человек"
                                check="средний чек на 1 персону от 1900 с"
                            />
                        </div>
                        <div className={styles.banquet_sale}>

                            <h1>
                                Лучши предложения для вашего Мероприятия!
                            </h1>

                            <h2 left="0">Фуршетное меню</h2>
                            <video src={video} controls="controls" autoplay="true" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum mollitia incidunt neque iure amet pariatur dolor modi eligendi omnis eveniet illo quod, ex debitis accusamus est impedit sequi et.
                                <div className={styles.banquet_page_link}>
                                    <a href="https://www.instagram.com/furshet.bishkek/"><PiInstagramLogoDuotone></PiInstagramLogoDuotone></a>
                                    <a href="https://www.facebook.com/foodhousekg/?locale=ru_RU"><PiTelegramLogoDuotone></PiTelegramLogoDuotone></a>
                                    <a href="https://t.me/it_academy_kg"><AiOutlineFacebook></AiOutlineFacebook></a>
                                </div>
                            </p>
                            <h2 left="0">Топовые звуковые оборудования</h2>
                            <video src={video} controls="controls" autoplay="true" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum mollitia incidunt neque iure amet pariatur dolor modi eligendi omnis eveniet illo quod, ex debitis accusamus est impedit sequi et.
                                <div className={styles.banquet_page_link}>
                                    <a href="https://www.instagram.com/tempokg/"><PiInstagramLogoDuotone></PiInstagramLogoDuotone></a>
                                    <a href="https://www.facebook.com/kWtkg/?locale=ru_RU"><PiTelegramLogoDuotone></PiTelegramLogoDuotone></a>
                                    <a href="https://t.me/it_academy_kg"><AiOutlineFacebook></AiOutlineFacebook></a>
                                </div>
                            </p>
                            <h2 left="0">Оформление зала</h2>
                            <video src={video} controls="controls" autoplay="true" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum mollitia incidunt neque iure amet pariatur dolor modi eligendi omnis eveniet illo quod, ex debitis accusamus est impedit sequi et.
                                <div className={styles.banquet_page_link}>
                                    <a href="https://www.instagram.com/duet.kg_weddings/"><PiInstagramLogoDuotone></PiInstagramLogoDuotone></a>
                                    <a href="https://www.facebook.com/dreamwedding.kg/?locale=ru_RU"><PiTelegramLogoDuotone></PiTelegramLogoDuotone></a>
                                    <a href="https://t.me/it_academy_kg"><AiOutlineFacebook></AiOutlineFacebook></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}