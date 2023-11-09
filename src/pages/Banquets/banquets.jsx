import { CardBanquets } from "../../components/cardBanquets/cardBanquets"
import styles from "./banquets.module.scss"


export const Banquets = () => {
    const image = require('../../assets/banquets/alatoo.jpg')
    const image1 = require('../../assets/banquets/jannat.jpg')

    return (
        <>
        <div className="container">
        <div className={styles.banquet_page}>
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
            <div className={styles.banquet_sale}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum mollitia incidunt neque iure amet pariatur dolor modi eligendi omnis eveniet illo quod, ex debitis accusamus est impedit sequi et.</p></div>
        </div>
        </div>
        </>
    )
}