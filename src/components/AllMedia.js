import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { getMovies } from '../services/movies-api'
import { getVideogames } from '../services/videogames-api'

export default function AllMedia() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies() // calling function to grab all movies in collection
        .then(res => setMovies(res.data)) // setting state with the returned movie data
    }, [])
    console.log(movies) // testing
    const [videogames, setVideogames] = useState([])
    useEffect(() => {
        getVideogames() // calling function to grab all videogames in collection
        .then(res => setVideogames(res.data)) // setting state with the returned videogame data
    }, [])
    console.log(videogames) // testing
    return(
        <div>
            <h3>~Movies~</h3>
            <ul>
                {movies.map((movie) => {
                    return (
                        <div>
                            <Link to={`/movies/${movie._id}`}>{movie.title}
                            </Link>
                        </div>
                    )
                })}
            </ul>
            <h3>**Videogames**</h3>
            <ul>
                {videogames.map((videogame) => {
                    return (
                        <div>
                            <Link to={`/videogames/${videogame._id}`}>{videogame.title}
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}