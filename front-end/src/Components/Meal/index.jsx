import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Meal({ meal }) {
  return (
    <div className="cont-meal-category">
      <Link to={`/mealdetails/${meal.idMeal}`}>
        <img
          className="image-meal-category"
          src={meal.strMealThumb}
          alt="meal"
        />
      </Link>
      <section className="cont-title-meal">
        <h3>{meal.strMeal}</h3>
      </section>
    </div>
  );
}

export default Meal;
