import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Arepas from './pages/receta1'
import Brownies from './pages/receta2'
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas/arepas" element={<Arepas />} />
          <Route path="/recetas/brownies" element={<Brownies />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Mi libro de
        cocina</footer>
    </div>
  )
}