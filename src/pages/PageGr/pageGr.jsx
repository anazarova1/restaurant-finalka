 import styles from "./pageGr.module.scss"
 import page_img from "../../assets/main.bg.png"

 export const PageGr =() => {
    return(
        <>
        <div className={styles.pageGr}>
<img className={styles.page_img} src={page_img} />
        </div>
        </>
    )
 }