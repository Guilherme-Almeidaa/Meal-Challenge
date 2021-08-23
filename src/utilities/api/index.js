import axios from "axios";

const url = process.env.URL_MEALS || "http://localhost:3001";

export const getMealsByCategory = async (category) => {
  const options = {
    method: "GET",
    url: `${url}/meals/filter`,
    params: { c: category },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMealsCategories = async () => {
  const options = {
    method: "GET",
    url: `${url}/meals/categories`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getMealById = async (id) => {
  const options = {
    method: "GET",
    url: `${url}/meals/${id}`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getAllMeals = async (meal) => {
  const options = {
    method: "GET",
    url: `${url}/meals/search`,
    params: { m: meal },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};
