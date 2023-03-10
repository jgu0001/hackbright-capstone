import axios from "axios";

const API_KEY = "3fb87defea44462ba90b127ffd5e7126";
const BASE_URL = "https://api.spoonacular.com";

export const searchRecipesByIngredients = (ingredients) => {
  const url = `${BASE_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=10`;
  return axios.get(url);
};

export const getRecipeById = (id) => {
  const url = `${BASE_URL}/${id}/recipes/information?apiKey=${API_KEY}`;
  return axios.get(url);
};

export const randomFoodJoke = () => {
  const url = `${BASE_URL}/food/jokes/random?apiKey=${API_KEY}`;
  return axios.get(url);
};
