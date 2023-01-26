import { Outlet } from "react-router-dom"

export default function VideogameOutlet() {
    return (
        <div>
            {/* Element to be used in App for rendering the different Videogame collection specific components, depending upon url */}
            <Outlet />
        </div>
    )
}