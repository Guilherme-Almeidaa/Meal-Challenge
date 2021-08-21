const mealsService = require("../services/mealsService");

const getAllMeals = (req, res) => {
  const { m } = req.query;
  const meal = m;
  console.log(meal);
  try {
    return mealsService.getAllMeals(meal).then((response) => {
      res.status(200);
      return res.json(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
    return res.json(error);
  }
};

const getMealById = (req, res) => {
  const { id } = req.params;
  try {
    return mealsService.getMealById(id).then((response) => {
      res.status(200);
      return res.json(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
    return res.json(error);
  }
};

const getAllMealsCategories = (_req, res) => {
  try {
    return mealsService.getAllMealsCategories().then((response) => {
      res.status(200);
      return res.json(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
    return res.json(error);
  }
};

const getMealsByCategory = (req, res) => {
  const { c } = req.query;
  const category = c;
  try {
    return mealsService.getMealsByCategory(category).then((response) => {
      res.status(200);
      return res.json(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
    return res.json(error);
  }
};

module.exports = {
  getAllMeals,
  getMealById,
  getAllMealsCategories,
  getMealsByCategory,
};
