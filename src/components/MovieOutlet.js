import { Outlet } from "react-router-dom"

export default function MovieOutlet() {
    return (
        <div>
            {/* Element to be used in App for rendering the different Movie collection specific components, depending upon url */}
            <Outlet />
        </div>
    )
}