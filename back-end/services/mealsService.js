const mealsModels = require("../models/mealsModel");

const getAllMeals = (meal) => {
  const result = mealsModels.getAllMeals(meal).then((res) => res.meals);
  return result;
};

const getMealById = (id) => {
  const result = mealsModels.getMealById(id).then((res) => res.meals[0]);
  return result;
};

const getAllMealsCategories = () => {
  const result = mealsModels
    .getAllMealsCategories()
    .then((res) => res.categories);
  return result;
};

const getMealsByCategory = (category) => {
  const result = mealsModels
    .getMealsByCategory(category)
    .then((res) => res.meals);
  return result;
};

module.exports = {
  getAllMeals,
  getMealById,
  getAllMealsCategories,
  getMealsByCategory,
};
