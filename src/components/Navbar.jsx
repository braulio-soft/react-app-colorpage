import { Link } from "react-router-dom";

function NavBar() {
    const colors = ["red", "blue", "gray", "green"];
    return (
        <>
            <ul className="nav-list">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {colors.map(color => (
                    <li key={color}><Link to={`/${color}`}>{color.charAt(0).toUpperCase() + color.slice(1)}</Link></li>
                ))}
            </ul>
        </>
    )
}


export default NavBar;