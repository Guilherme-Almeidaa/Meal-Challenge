import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Meal from "../../Components/Meal";
import { getAllMeals } from "../../utilities/api";
import "./styles.css";

function PageSearchMeals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllMeals(search).then((response) => {
      setMeals(response || []);
      setIsLoading(false);
    });
  }, [search]);

  return (
    <div>
      <Header title="Search" />

      <section className="cont-meals-search">
        <div className="cont-input-search">
          <input
            onChange={({ target }) => setSearch(target.value)}
            placeholder="search"
            className="input-search"
            type="text"
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="meals-search">
            {meals.length === 0 ? (
              <h2>No Meals Found</h2>
            ) : (
              meals.map((meal, index) => <Meal meal={meal} key={index} />)
            )}
          </section>
        )}
      </section>
    </div>
  );
}

export default PageSearchMeals;
