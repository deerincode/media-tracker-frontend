import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovie, deleteMovie } from '../services/movies-api'

export default function Movie() {
    const nav = useNavigate()
    const {id} = useParams() 
    const [movie, setMovie] = useState({})
    useEffect(() => {
        getMovie(id) // grabs the specific Movie from the api using the id
        .then(res => setMovie(res.data))
    },[])

    const deleteTheMovie = () => {
        deleteMovie(id)
        nav('/movies/list') // navs back to Movie collection page
    }

    return(
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.releaseyear}</h2>
            <h4>Directors: {movie.directors}</h4>
            <h5>Review:</h5>{movie.review}
            <h5>
                Watched:<input type='checkbox' defaultChecked={movie.watched} disabled />
            </h5>

            <div>
                <button onClick={() => { nav(`/movies/${id}/edit`) }}>Edit</button>
                <button onClick={deleteTheMovie}>Delete</button>
            </div>
            
        </div>
    )
}