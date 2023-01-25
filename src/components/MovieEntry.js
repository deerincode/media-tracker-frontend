import { useSate, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovie, deleteMovie } from '../services/movies-api'

export default function Movie() {
    const nav = useNavigate() // return to main page
    const {id} = useParams() // destructuring id param for use
    const [movie, setMovie] = useState({})
    useEffect(() => {
        getMovie(id) // grabs the specific Movie from the api using the id
        .then(res => setMovie(res.data))
    },[])

    // const deleteMovie = () => {
    //     deleteMovie(id)
    //     nav('/') // back to main screen
    // }

    return(
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.releaseyear}</h2>
            <h4>{movie.directors}</h4>
            <h5>{movie.review}</h5>
            Add indicator of if movie has been watched!!!
        </div>
    )
}