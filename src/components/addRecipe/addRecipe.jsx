import styles from "./addRecipe.module.scss"
export const addRecipe = () => {

    return (
        <>
            <div className={styles.card_recipes}>

                <Card className={styles.card}
                    hoverable cover={<img className={styles.card_img} src={props.image} alt="Картинка" />}>
                        <input className={styles.card_name}>{props.name}</input>
                    <div className={styles.card_marker}>
                        <div className={styles.icons}>
                            <FcList></FcList>
                        </div>
                        <div>
                            <h3>Список ингридиентов:</h3>
                            <input>{reciep.ingredients}</input>
                        </div>
                    </div>
                    <div className={styles.card_marker}>
                        <div className={styles.icons}>
                            <GiCook></GiCook>
                        </div>
                        <div>
                            <div className={styles.dropdown}>
                                <Dropdown
                                    menu={{
                                        items: [{
                                            label: <a href="https://www.antgroup.com">
                                                    <input>{reciep.cooking}</input>
                                            </a>,
                                            key: '0',
                                        }],
                                    }}
                                    trigger={['click']}
                                >
                                    <a className={styles.dropdown} onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Способ приготовления:                                           <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className={styles.icons_like}>
                        <AiOutlineLike></AiOutlineLike>
                        <AiOutlineDislike></AiOutlineDislike>
                    </div>
                </Card>


            </div>
        </>
    )
}