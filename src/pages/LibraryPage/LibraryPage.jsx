import React, { useEffect } from "react";
import styles from "./LibraryPage.module.scss";
import libraryImage from "../../images/LibraryImages/libraryImage.png";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../../store/actions";


export const Library = () => {
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(getBook());
    }, []);

    console.log(books);

    return (
        <div className={styles.library}>
            <div className={styles.library__cover}>
                <div className="container">
                    <div>
                        <div className={styles.library__content}>
                            <div className={styles.library__text}>
                                <h2 className={`${styles.library__title} title`}>
                                    Learn new with this books
                                </h2>
                                <p className={`${styles.library__description} description `}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Praesentium cumque earum, eveniet vero laboriosam ex!
                                </p>
                                <button className={`${styles.library__button} button`}>
                                    button
                                </button>
                            </div>
                            <div>
                                <img
                                    className={styles.library__img}
                                    src={libraryImage}
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className={styles.library__carts}>
                    <h3 className={styles.library__cartsTitle}>Книги по Python</h3>
                    <div className={styles.library__cartCover}>
                        {books.map((book) => {
                            return <a className={styles.library__cart} href={`https://pixelpulsemavericks.ru/api/v1/library/${book.id}/download/`} target="_blank">
                                <img className={styles.library__cartImage} src={book.image} alt="" />
                                {/* <h2>Название:{book.name}</h2>
                                <p>автор:{book.author}</p>
                                <p>дата выхода:{book.data}</p>
                                <p>описание:{book.description}</p> */}
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
