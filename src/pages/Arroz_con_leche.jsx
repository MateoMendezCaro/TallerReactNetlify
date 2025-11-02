import '../styles/Arroz_con_leche.css';
import arrozImg1 from '../assets/arroz-con-leche_1.png';
import arrozImg2 from '../assets/arroz-con-leche_2.png';
import arrozImg3 from '../assets/arroz-con-leche_3.png';

export default function Arroz_con_leche() {

  const descripcion = `Bienvenidos a esta deliciosa receta de Arroz con Leche. Aquí aprenderás a preparar este postre tradicional utilizando ingredientes caseros y en cantidades ideales para porciones familiares. Sigue cada paso cuidadosamente para obtener una textura cremosa y un sabor auténtico.`

  const ingredientes = [
    "1 taza de arroz blanco (aprox. 200 g)",
    "1 litro de leche entera",
    "1 rama de canela",
    "Cáscara de 1 limón (solo la parte amarilla)",
    "120 g de azúcar (aprox. 6 cucharadas)",
    "20 g de mantequilla",
    "(Opcional) 1/4 taza de uvas pasas"
  ];

  const pasos = [
    "1. Lavar bien el arroz bajo el chorro de agua utilizando un colador, hasta que el agua salga clara.",
    "2. Colocar en una olla el arroz lavado, la leche, la rama de canela y la cáscara del limón.",
    "3. Cocinar a fuego bajo durante 25-30 minutos, removiendo ocasionalmente para que no se pegue.",
    "4. Retirar cáscara de limón y canela. Añadir azúcar y mantequilla, mezclar bien.",
    "5. Cocinar 10 minutos más hasta obtener textura cremosa. Agregar pasas si se desea.",
    "6. Dejar reposar 20 minutos antes de servir.",
    "7. Servir tibio o frío y espolvorear canela si se desea."
  ];

  return (
    <div className="receta-container">
      <h1>Arroz con Leche</h1>
      <p className="receta-descripcion">{descripcion}</p>

      <h2>Ingredientes</h2>
      <ul className="receta-ingredientes">
        {ingredientes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="receta-imagenes">
        <img src={arrozImg1} alt="Preparación paso 1" className="receta-img" />
        <img src={arrozImg2} alt="Preparación paso 2" className="receta-img" />
        <img src={arrozImg3} alt="Preparación paso 3" className="receta-img" />
      </div>

      <h2>Preparación</h2>
      <ol className="receta-lista">
        {pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol>

      <div className="notas-chef">
        <h2>Notas del Chef 👨‍🍳</h2>
        <ul>
          <li>Si quieres que quede más cremoso, utiliza leche entera.</li>
          <li>Puedes reemplazar la cáscara de limón por naranja para un aroma diferente.</li>
          <li>Si queda muy espeso, agrega un chorrito de leche caliente al final.</li>
        </ul>
      </div>
    </div>
  );
}