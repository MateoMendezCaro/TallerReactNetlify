import Recipe from '../components/Recipe'
import polloImg from '../assets/pollo.jpg'
import paso1 from '../assets/paso1.jpg'
import paso2 from '../assets/paso2.jpg'
import paso3 from '../assets/paso3.jpg'
import paso4 from '../assets/paso4.jpg'
import  '../pages/pollo_naranja.css' 

export default function PolloNaranja() {
  const data = {
    title: 'Pollo a la Naranja',
    intro: 'Trozos de pechuga dorados y bañados en una deliciosa salsa de naranja con toques dulces y especiados. ¡Un plato perfecto para sorprender!',
    servings: 4,
    time: '30 min',
    image: polloImg,
    ingredients: [
      '500 g de trozos de pechuga de pollo',
      'Sal y pimienta al gusto',
      'Aceite vegetal',
      '1 ½ taza de jugo de naranja',
      '1 cucharada de salsa de soya',
      'Ralladura de una naranja',
      '1 ramita de romero',
      '¼ cucharadita de canela en polvo',
      '1 cucharada de panela en polvo',
      '1 cucharadita de ají en escamas',
      '1 naranja cortada en rodajas delgadas',
      '1 cucharadita de fécula de maíz disuelta en 2 cucharadas de agua',
    ],
    steps: [
      'Sazona los trozos de pollo con sal y pimienta. Dora en una sartén caliente con aceite hasta que estén dorados.',
      'Agrega el jugo de naranja, la salsa de soya, la ralladura, el romero, la canela, la panela y el ají. Revuelve bien.',
      'Coloca las rodajas de naranja alrededor del pollo y cocina a fuego medio durante 3 a 4 minutos.',
      'Disuelve la fécula de maíz en agua, agrégala a la sartén y mezcla hasta que espese la salsa. Retira el romero y apaga el fuego.',
      'Sirve acompañado de vegetales salteados o puré de papa. ¡Disfruta de este plato dulce y aromático!',
    ],
    stepImages: [paso1, paso2, paso3, paso4],
  }

  return (
    <div className="receta-container">
      <h1 className="titulo">{data.title}</h1>
      <p className="intro">{data.intro}</p>

      <div className="receta-contenido">
        {/* Columna de Ingredientes */}
        <div className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            {data.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Columna de Preparación */}
        <div className="preparacion">
          <h2>Preparación</h2>
          {data.steps.map((step, index) => (
            <div className="paso" key={index}>
              <img src={data.stepImages[index]} alt={`Paso ${index + 1}`} />
              <h3>Hora {index === data.steps.length - 1 ? 'de servir' : `del paso ${index + 1}`}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

