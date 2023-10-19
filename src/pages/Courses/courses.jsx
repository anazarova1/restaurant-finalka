
import styles from "./courses.module.scss"
import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions";
export const Courses = () => {

  const dispatch = useDispatch();
  const {courses, error} = useSelector(state => state.products);
  // console.log(courses);
  useEffect(() => {
    dispatch(getCourses());
  }, []);


  return (
    <><div className={styles.carousel}>
       {/* <Carousel autoplay>
            {
              courses?.map(el => (
                <div className={styles.win}>
  <div className={styles.contentStyle} key={el.id}>
                    <h2>{el.title}</h2>
                    <h3>{el.description}</h3>
                    <p> стоимость обучения: {el.price}</p>
                    <p>{el.duration}</p>
                </div>
                </div>
              
              ))
            }
      
          "id": 1,
          "title": "Python",
          "description": "курс по изучению языка Python",
          "price": "1300.00",
          "duration": "2 12:00:00" 

      </Carousel>  */}
    </div>


    </>
  );
};

