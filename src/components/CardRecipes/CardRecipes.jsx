import styles from "./cardRecipes.module.scss"
import React from 'react';
import { Card } from 'antd';
import { FcList } from "react-icons/fc"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { GiCook } from "react-icons/gi"
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export const CardRecipes = (props) => {

    const items = [
        {
            label: <a href="https://www.antgroup.com">
                <p>
                   {props.cooking}
                </p>
            </a>,
            key: '0',
        }
    ]


    return (
        <>
            <div className="container">
                <div className={styles.cards}>
                    <div className={styles.card_recipes}>
                        <Card className={styles.card}
                            hoverable cover={<img className={styles.card_img} src={props.image} alt="Картинка" />}>
                            <h2 className={styles.card_name}>{props.name}</h2>
                            <div className={styles.card_marker}>
                                <div className={styles.icons}>
                                    <FcList></FcList>
                                </div>
                                <div>
                                    <h3>Список ингридиентов:</h3>
                                    <p>{props.ingredients}</p>
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
                                                items,
                                            }}
                                            trigger={['click']}
                                        >
                                            <a className={styles.dropdown} onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    Способ приготовления:                                                <DownOutlined />
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
                  
                </div>
            </div>
        </>
    )
}


