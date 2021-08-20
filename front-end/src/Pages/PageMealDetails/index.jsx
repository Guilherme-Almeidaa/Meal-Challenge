import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import { getMealById } from "../../utilities/api";
import { handlerIngredients } from "../../utilities/helpers";
import "./styles.css";

function MealDetails({ match }) {
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const id = match.params.id;

  useEffect(() => {
    setIsLoading(true);
    getMealById(id).then((response) => {
      setMeal(response);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="cont-page-details">
          <Header title="Details" />
          <section className="cont-meal-details">
            <div className="cont-meal-info-image">
              <div className="cont-image">
                <img
                  className="img-details"
                  src={meal.strMealThumb}
                  alt="meal"
                />

                <a
                  target="_blanck"
                  className="button-link-video"
                  href={meal.strYoutube}
                >
                  Preparation video
                </a>
              </div>
              <section className="cont-info-meal-details">
                <p>Name: {meal.strMeal}</p>
                <p>Area: {meal.strArea}</p>
                <p>Tags: {meal.strTags}</p>
                <section>
                  <p>Ingredients</p>
                  <ul className="list-ingredients">
                    {handlerIngredients(meal)}
                  </ul>
                </section>
              </section>
            </div>
            <section className="cont-instructions">
              <h2>Instructions</h2>
              <p>{meal.strInstructions}</p>
            </section>
          </section>
        </div>
      )}
    </div>
  );
}

export default MealDetails;

//https://www.youtube.com/embed/4aZr5hZXP_s
//https://www.youtube.com/watch?v=VVnZd8A84z4
