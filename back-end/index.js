const express = require("express");
const cors = require("cors");
const mealController = require("./controllers/mealsControllers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/meals/categories", mealController.getAllMealsCategories);
app.use("/meals/filter", mealController.getMealsByCategory);
app.use("/meals/search", mealController.getAllMeals);
app.use("/meals/:id", mealController.getMealById);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
