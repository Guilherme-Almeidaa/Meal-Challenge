const fetch = require("node-fetch");

const getAllMeals = (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getMealById = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getAllMealsCategories = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getMealsByCategory = (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

module.exports = {
  getMealById,
  getAllMeals,
  getAllMealsCategories,
  getMealsByCategory,
};
