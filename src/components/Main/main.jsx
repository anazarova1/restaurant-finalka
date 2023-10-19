
import styles from "./main.module.scss"
import bg_img from "../../assets/bg-courses1.jpg"

export const Main =() => {
  return(
    <><div className={styles.bg}>
<div className={styles.main_content}>
   <img className={styles.bg_img} src={bg_img} alt="bg" />
      <p>Инновации<br/> начинаются с ТЕБЯ!</p>
    </div>
    </div>
    
    </>
  )
}
