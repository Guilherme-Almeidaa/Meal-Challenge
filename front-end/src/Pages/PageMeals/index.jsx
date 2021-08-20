import React, { useEffect, useState } from "react";
import Meal from "../../Components/Category";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import { getAllMealsCategories } from "../../utilities/api";
import "./styles.css";

function PageMeals() {
  const [mealsCategories, setMealsCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAllMealsCategories().then((response) => {
      setMealsCategories(response);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header title="Meals" />

          <section className="cont-meals-all">
            {mealsCategories.map((category, index) => (
              <Meal category={category} key={index} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default PageMeals;
