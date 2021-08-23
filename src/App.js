import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageMeals from "./Pages/PageMeals";
import MealDetails from "./Pages/PageMealDetails";
import Provider from "./Provider/Provider";
import PageSearchMeals from "./Pages/PageSearchMeals";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={PageMeals} />
          <Route path="/search" component={PageSearchMeals} />
          <Route
            path="/mealdetails/:id"
            render={(props) => <MealDetails {...props} />}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
