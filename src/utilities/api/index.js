import axios from "axios";
require("dotenv").config();
const URL = process.env.REACT_APP_URL_MEALS || "http://localhost:3001";

export const getMealsByCategory = async (category) => {
  const options = {
    method: "GET",
    url: `${URL}/filter`,
    params: { c: category },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMealsCategories = async () => {
  console.log(URL);
  const options = {
    method: "GET",
    url: `${URL}/categories`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getMealById = async (id) => {
  const options = {
    method: "GET",
    url: `${URL}/id/${id}`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMeals = async (meal) => {
  const options = {
    method: "GET",
    url: `${URL}`,
    params: { m: meal },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};
