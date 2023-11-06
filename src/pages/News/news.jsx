import styles from "./news.module.scss"
import { Card } from 'antd';

export const News = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.cards}>
                        <Card
                            title="Card title"
                            bordered={false}
                            className={styles.card}
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card
                            title="Card title"
                            bordered={false}
                            className={styles.card}
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card
                            title="Card title"
                            bordered={false}
                            className={styles.card}
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card
                            title="Card title"
                            bordered={false}
                            className={styles.card}
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}