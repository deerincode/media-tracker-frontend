import { getVideogames } from '../services/videogames-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Videogames() {
    const [videogames, setVideogames] = useState([])
    useEffect(() => {
        getVideogames() // calling function to grab all videogames in collection
        .then(res => setVideogames(res.data)) // setting state with the returned videogame data
    }, [])
    console.log(videogames) // testing
    return(
        <div>
            <ul>
                {videogames.map((videogame) =>{
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