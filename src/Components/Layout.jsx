import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <main className="App">
             <h1>Event Registration</h1>
            <Outlet />
        </main>
    )
}

export default Layout