import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PolloNaranja from './pages/pollo_naranja'
// import Arroz_con_leche from './pages/Arroz_con_leche'
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/recetas/arrozconleche" element={<Arroz_con_leche />} /> */}
          <Route path="/recetas/polloNaranja" element={<PolloNaranja />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Mi libro de
        cocina</footer>
    </div>
  )
}