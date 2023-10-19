import { Link } from "react-router-dom";
import styles from "../Button/Button.module.scss";
import login from "../../../assets/login.svg"
export const Button = () => {
  return (
    <>

      {/* <button className={styles.button}> */}
        {/* <Link to="/Entrance" className={styles.nav_link}>
          Login
        </Link> */}
      {/* </button> */}

      <button className={styles.button}>
        <Link to="/Entrance" className={styles.nav_link}>
          Sing up
        </Link>
        <img className={styles.login} src={login} alt="login" />
      </button>
    </>
  );
};