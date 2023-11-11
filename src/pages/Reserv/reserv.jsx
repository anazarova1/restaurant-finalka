import { useDispatch, useSelector } from "react-redux"
import styles from "./reserv.module.scss"
import { useEffect } from "react"
import { getReserv } from "../../store/actions"

export const Reserv = () => {
    const { reserv } = useSelector((state) => state.reserv)
    const { user } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const email = localStorage.getItem("id")
    console.log(reserv);
    useEffect(() => {
        dispatch(getReserv())
    }, [])
    const filteredReserv = reserv?.filter(item => item.email === email )
    console.log(filteredReserv);

    return (
        <>
            <div>
                {
                    filteredReserv?.map((reserv) => (
                        <div className={styles.reserv_content}>
                            <h2>{reserv.name}
                                <p>{reserv.address}</p>
                                <p>{reserv.number}</p>
                                <p>{reserv.surname}</p>
                                <p>{reserv.count}</p>
                            </h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
