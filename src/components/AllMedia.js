import { useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { getMovies } from '../services/movies-api'
import { getVideogames } from '../services/videogames-api'
import CreateMovie from './CreateMovieEntry'

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
            {/* <CreateMovie /> */}
            <ul>
                {movies.map((movie) => {
                    return (
                        <div>
                            <Link to={`/${movie._id}`}>{movie.title}
                            </Link>
                        </div>
                    )
                })}
            </ul>
            <ul>
                {videogames.map((videogame) => {
                    return (
                        <div>
                            <Link to={`/${videogame._id}`}>{videogame.title}
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}