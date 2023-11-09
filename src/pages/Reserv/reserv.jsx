import { useDispatch, useSelector } from "react-redux"
import styles from "./reserv.module.scss"
import { useEffect } from "react"
import { getReserv } from "../../store/actions"

export const Reserv = () => {
    const { reserv } = useSelector((state) => state.reserv)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReserv())
    }, [])

    return (
        <>
            <div>
                {
                    reserv?.map((reserv) => (
                        <h2>
                            {reserv.name}
                        </h2>

                    ))
                }
            </div>
        </>
    )
}