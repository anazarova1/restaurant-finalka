import styles from "./cardRecipes.module.scss"
import React, { useEffect } from 'react';
import { Card } from 'antd';
import { FcList } from "react-icons/fc"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { GiCook } from "react-icons/gi"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { getRecipes } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const CardRecipes = (props) => {
    const { recipes } = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecipes())
    }, [])
    return (
        <>
            <div className="container">
                <div className={styles.card_recipes}>
                    {
                        recipes?.map((reciep) => (
                            <Card className={styles.card} key={reciep.id}
                                hoverable cover={<img className={styles.card_img} src={reciep.image} alt="Картинка" />}>
                                <h2 className={styles.card_name}>{reciep.name}</h2>
                                <div className={styles.card_marker}>
                                    <div className={styles.icons}>
                                        <FcList></FcList>
                                    </div>
                                    <div>
                                        <h3>Список ингридиентов:</h3>
                                        <p>{reciep.ingredients}</p>
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
                                                            <p>
                                                                {reciep.cooking}
                                                            </p>
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
                                    <button>
                                        <AiOutlineLike></AiOutlineLike>
                                    </button>
                                    <button>
                                        <AiOutlineDislike></AiOutlineDislike>
                                    </button>
                                </div>
                            </Card>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

