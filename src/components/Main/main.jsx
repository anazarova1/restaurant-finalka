
import { CardRecipes } from "../CardRecipes";
import { CardResto } from "../CardsResto"
import { Slider } from "../Slider"
import { CardBanquets } from "../cardBanquets/cardBanquets";
import styles from "./main.module.scss"
export const Main = () => {
  const image = require('../../assets/restoran/frunze.jpg');
  const image2 = require('../../assets/restoran/cyclone.jpg')
  const image5 = require('../../assets/restoran/usta.jpg')
  const imageb1 = require('../../assets/banquets/alatoo.jpg')
  const imageb2 = require('../../assets/banquets/jannat.jpg')

  return (
    <>
      <div className='container'>
        <div className={styles.main_content}>
          <div className={styles.main_content_resto}>
            <div>
              <h2>Рестораны</h2>
              <div className={styles.card_main}>
                <CardResto
                  image={image}
                  name='Frunze'
                  adres='​​Абдумомунова, 220а​'
                  points='4,7'
                  check='Средний чек 3500 с'
                  kitchen='​​Восточная кухня​ Европейская кухня'
                  modalName='niko'
                />
                <CardResto
                  image={image2}
                  name='Cyclone'
                  adres='​​Проспект Чуй, 136​'
                  points='4,2'
                  check='Средний чек 1100 с'
                  kitchen='​​Винный ресторан ​Итальянская кухня'

                />
                <CardResto
                  image={image5}
                  name='Usta Turkish '
                  adres='​Токомбаева, 25​​​'
                  points='3,6'
                  check='Средний чек 2500с'
                  kitchen='​Халяльная кухня​Турецкая кухня​​'
                />
              </div>
            </div>
          </div>
          <div className={styles.main_content_banquet}>
            <h2>Банкетные залы</h2>
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
          <h2>Рецепты</h2>
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
