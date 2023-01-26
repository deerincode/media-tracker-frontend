import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getVideogame, deleteVideogame } from '../services/videogames-api'

export default function Videogame() {
    const nav = useNavigate() // return to main page
    const {id} = useParams() // destructuring id param for use
    const [videogame, setVideogame] = useState({})
    useEffect(() => {
        getVideogame(id) // grabs the specific Videogame from the api using the id
        .then(res => setVideogame(res.data))
    },[])

    // const deleteVideogame = () => {
    //     deleteVideogame(id)
    //     nav('/') // back to main screen
    // }

    return(
        <div>
            <h1>{videogame.title}</h1>
            <h2>{videogame.releaseyear}</h2>
            <h3>{videogame.developers}</h3>
            <h3>{videogame.publishers}</h3>
            {videogame.review}
            <h5>Notes:</h5>
            {videogame.notes}
            Add indicator for played
            Add indicator for completed
        </div>
    )
}