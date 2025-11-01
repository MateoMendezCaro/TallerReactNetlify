import { NavLink } from 'react-router-dom'
export default function NavBar() {
    const linkClass = ({ isActive }) => (isActive ? 'active' : undefined)
    return (
        <header className="header">
            <nav className="nav">
                <span className="brand"> Libro de cocina</span>
                <ul className="menu">
                    <li><NavLink to="/" end className={linkClass}>Inicio</NavLink></li>
                    {/* <li><NavLink to="/recetas/arrozconleche" className={linkClass}>Arroz con leche</

                    NavLink></li> */}

                    <li><NavLink to="/recetas/polloNaranja" className={linkClass}>Pollo a la naranja</

                    NavLink></li>
                </ul>
            </nav>
        </header>
    )
}