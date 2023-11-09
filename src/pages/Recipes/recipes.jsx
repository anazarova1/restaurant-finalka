import styles from "./recipes.module.scss"
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { FcList } from "react-icons/fc"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { GiCook } from "react-icons/gi"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { getRecipes } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { CardRecipes } from "../../components/CardRecipes";

export const Recipes = (props) => {
    const [isHidden, setIsHidden] = useState(false)
    const { recipes } = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    const showModal = ()=> {
        setIsHidden(!isHidden)
    }

    return (
        <>
            <div className="container">
                <div className={styles.cards}>
                    <div className={styles.card_recipes}>
                        {
                            recipes?.map((reciep) => (
                                <Card className={styles.card}
                                    hoverable cover={<img className={styles.card_img} src={props.image} alt="Картинка" />}>
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
                                        <AiOutlineLike></AiOutlineLike>
                                        <AiOutlineDislike></AiOutlineDislike>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                    <div className={styles.add_recipes}>
    <button onClick={showModal}>hi</button>

    {

        isHidden ? (
            <div className={styles.modal}>
              <CardRecipes/>
            </div>
        ) : null
    }
</div>
                </div>
            </div>
        </>
    )
}

