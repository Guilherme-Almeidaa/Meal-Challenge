import React, { useEffect, useState } from "react";
import { getMealsByCategory } from "../../utilities/api";
import Meal from "../Meal";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./styles.css";

function Category({ category }) {
  const [meals, setMeals] = useState([]);
  const [scrollx, setScrollx] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = meals.length * 250;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 40;
    }
    setScrollx(x);
  };

  useEffect(() => {
    getMealsByCategory(category.strCategory).then((response) => {
      setMeals(response);
    });
  }, [category.strCategory]);

  return (
    <div className="page-cont-meals">
      <section className="cont-meals-row">
        <h1 className="title-category">{category.strCategory}</h1>
        <div onClick={handleLeftArrow} className="meals-row-left">
          <NavigateBeforeIcon style={{ fontSize: "70" }} />
        </div>
        <div onClick={handleRightArrow} className="meals-row-right">
          <NavigateNextIcon style={{ fontSize: "70" }} />
        </div>

        <section
          style={{ marginLeft: scrollx, width: meals.length * 250 }}
          className="cont-meals"
        >
          {meals.map((meal, index) => (
            <Meal meal={meal} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default Category;
