import styles from "./Footer.module.scss"

import { MyMapComponent } from "../Map/map"

export const Footer = () => {

    return (
        <>
            <div className={styles.bg}>

            <MyMapComponent/>

            </div>
        </>
    )
}
