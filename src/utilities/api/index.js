import axios from "axios";
require("dotenv").config();
const URL = process.env.REACT_APP_URL_MEALS || "http://localhost:3001";
const timeout = 20000;

export const getMealsByCategory = (category) => {
  const options = {
    method: "GET",
    url: `${URL}/filter`,
    timeout,
    params: { c: category },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMealsCategories = () => {
  const options = {
    method: "GET",
    timeout,
    url: `${URL}/categories`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getMealById = (id) => {
  const options = {
    method: "GET",
    timeout,
    url: `${URL}/id/${id}`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMeals = (meal) => {
  const options = {
    method: "GET",
    url: `${URL}`,
    timeout,
    params: { m: meal },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};
