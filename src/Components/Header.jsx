import { NavLink } from "react-router-dom";

export default function Header() {


    return (

        <header>
            <nav class="navbar navbar-expand-sm navbar-light bg-primary">
                <div class="container-fluid">
                    <NavLink class="navbar-brand " id="always-active" to="/">FAKE STORE</NavLink>
                    <div class="navbar-nav">
                        <NavLink class="nav-link" aria-current="page" to="/" >Home</NavLink>
                        <NavLink class="nav-link" aria-current="page" to="/Products">Products</NavLink>
                        <NavLink class="nav-link" aria-current="page" to="/AboutUs">AboutUs</NavLink>
                    </div>

                </div>
            </nav>
        </header>
    )
}