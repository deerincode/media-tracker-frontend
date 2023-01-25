// Videogame endpoints
import axios from "axios";
const baseURL = 'https://localhost:3001/videogames'

// Show all
export const getVideogames = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

// Show one entry
export const getVideogame = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit Videogame entry
export const editVideogame = (id, updatedVideogame) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedVideogame)
    return response
}

// Create Videogame entry
export const createVideogame = (movie) => {
    const URL = baseURL
    const response = axios.post(URL, movie)
    return response
}

// Delete Videogame entry
export const deleteVideogame = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}
