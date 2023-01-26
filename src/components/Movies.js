import { getMovies } from '../services/movies-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies() // calling function to grab all movies in collection
        .then(res => setMovies(res.data)) // setting state with the returned movie data
    }, [])
    console.log(movies) // testing
    return(
        <div>
            <ul>
                {movies.map((movie) =>{
                    return (
                        <div>
                            <h5><Link to={`/${movie._id}`}>{movie.title}
                            </Link></h5>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}