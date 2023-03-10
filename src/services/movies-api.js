// Movie endpoints
import axios from "axios";
// const baseURL = 'http://localhost:3001/movies/' // For local undeployed use
const baseURL = 'https://vogue-mediatracker-backend.onrender.com/movies'

// Show all
export const getMovies = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

// Show one entry
export const getMovie = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit Movie entry
export const editMovie = (id, updatedMovie) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedMovie)
    return response
}

// Create Movie entry
export const createMovie = (movie) => {
    const URL = baseURL
    const response = axios.post(URL, movie)
    return response
}

// Delete Movie entry
export const deleteMovie = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
