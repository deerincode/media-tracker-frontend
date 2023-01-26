import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getVideogame, deleteVideogame } from '../services/videogames-api'

export default function Videogame() {
    const nav = useNavigate()
    const {id} = useParams()
    const [videogame, setVideogame] = useState({})
    useEffect(() => {
        getVideogame(id) // grabs the specific Videogame from the api using the id
        .then(res => setVideogame(res.data))
    },[])

    const deleteTheVideogame = () => {
        deleteVideogame(id)
        nav('/videogames/list') // back to Videogames collection page
    }

    return(
        <div>
            <h1>{videogame.title}</h1>
            <h2>{videogame.releaseyear}</h2>
            <h4>Developers: {videogame.developers}</h4>
            <h4>Publishers: {videogame.publishers}</h4>
            <h5>Review:</h5>{videogame.review}
            <h5>Notes:</h5>{videogame.notes}
            
            <div>
                <h5>
                    Played:<input type='checkbox' defaultChecked={videogame.played} disabled />
                    Completed:<input type='checkbox' defaultChecked={videogame.completed} disabled />
                </h5>
            </div>
            
            <div>
                <button onClick={() => { nav(`/videogames/${id}/edit`) }}>Edit</button>
                <button onClick={deleteTheVideogame}>Delete</button>
            </div>
            
        </div>
    )
}