import axios from 'axios';


export const getMealsByCategory = async (category) => {
    const options = {
        method:'GET',
        url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    }

    return axios.request(options).then(response => {
        return response.data.meals
    })
}

export const getAllMealsCategories = async () => {
    const options = {
        method:'GET',
        url:'https://www.themealdb.com/api/json/v1/1/categories.php',
    }

    return axios.request(options).then(response => {
        return response.data.categories
    })
}

export const getMealById = async (id) => {
    const options = {
        method:'GET',
        url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    }

    return axios.request(options).then(response => {
        return response.data.meals[0]
    })
}

export const getAllMeals= async (meal) => {
    const options = {
        method:'GET',
        url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`,
    }

    return axios.request(options).then(response => {
        return response.data.meals
    })
}




