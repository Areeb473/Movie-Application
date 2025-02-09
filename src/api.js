import axios from 'axios';

const API_KEY = '84f99369';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Response: "False", Error: "Failed to fetch data" };
    }
};
