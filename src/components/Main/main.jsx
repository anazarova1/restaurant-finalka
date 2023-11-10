
import { Link } from "react-router-dom";
import { CardRecipes } from "../CardRecipes";
import { Slider } from "../Slider"
import { CardBanquets } from "../cardBanquets/cardBanquets";
import styles from "./main.module.scss"
import { CardRestaurant } from "../CardRestaurant";
export const Main = () => {

  const imageb1 = require('../../assets/banquets/alatoo.jpg')
  const imageb2 = require('../../assets/banquets/jannat.jpg')

  return (
    <>
      <div className='container'>
        <div className={styles.main_content}>
          <div className={styles.main_content_resto}>
            <div>
            <li className={styles.header__item}><Link className={styles.page_title} to="/restaurants">Рестораны</Link></li>
              <div className={styles.card_main}>
            <CardRestaurant/>
              </div>
            </div>
          </div>
          <div className={styles.main_content_banquet}>
          <li className={styles.header__item}><Link className={styles.page_title} to="/banquets">Банкеты</Link></li>
            <div className={styles.card_main}>
              <CardBanquets 
                image={imageb1}
                name='Ala-Too'
                address="Малдыбаева, 54/1​"
                peoples=" Вместимость до 500 человек"
                check="средний чек на 1 персону от 2000 с"
              />
              <CardBanquets
                image={imageb2}
                name='Jannat'
                address="ул.Аалы Токомбаева 21/2​"
                peoples=" Вместимость до 400 человек"
                check="средний чек на 1 персону от 1900 с"
              />
            </div>
          </div>
          <div className={styles.main_content_recipes}>
          <li className={styles.header__item}><Link className={styles.page_title} to="/recipes">Рецепты</Link></li>

<div  className={styles.card_recipes}>
<CardRecipes className={styles.card_recipes_content}>
  
</CardRecipes>
</div>
          </div>
          <Slider/>
        </div>
      </div>
    </>
  )
}
