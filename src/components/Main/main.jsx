
import { CardResto } from "../CardsResto"
import { Slider } from "../Slider"
import styles from "./main.module.scss"
export const Main = () => {
  const image = require('../../assets/restoran/frunze.jpg');
  const image2 = require('../../assets/restoran/cyclone.jpg')
  const image5 = require('../../assets/restoran/usta.jpg')

  return (
    <>
      <div className='container'>
        <div className={styles.main_content}>
          <div>
            <h2>Рестораны</h2>
            <div className={styles.cards}>
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
      </div>
    </>
  )
}
