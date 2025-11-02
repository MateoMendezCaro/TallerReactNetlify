import { useState } from 'react'
import Recipe from '../components/Recipe.jsx'
import polloImg from '../assets/pollo.jpg'
import paso1 from '../assets/paso1.jpg'
import paso2 from '../assets/paso2.jpg'
import paso3 from '../assets/paso3.jpg'
import paso4 from '../assets/paso4.jpg'
import paso5 from '../assets/paso_final.jpg'
import '../pages/pollo_naranja.css'

export default function PolloNaranja() {
  const [servings, setServings] = useState(4)
  const [checkedIngredients, setCheckedIngredients] = useState({})

  const baseServings = 4

  const ingredientsData = [
    { amount: 500, unit: 'g', item: 'de trozos de pechuga de pollo' },
    { amount: null, unit: '', item: 'Sal y pimienta al gusto' },
    { amount: null, unit: '', item: 'Aceite vegetal' },
    { amount: 1.5, unit: 'taza', item: 'de jugo de naranja' },
    { amount: 1, unit: 'cucharada', item: 'de salsa de soya' },
    { amount: null, unit: '', item: 'Ralladura de una naranja' },
    { amount: 1, unit: 'ramita', item: 'de romero' },
    { amount: 0.25, unit: 'cucharadita', item: 'de canela en polvo' },
    { amount: 1, unit: 'cucharada', item: 'de panela en polvo' },
    { amount: 1, unit: 'cucharadita', item: 'de ají en escamas' },
    { amount: 1, unit: 'naranja', item: 'cortada en rodajas delgadas' },
    { amount: 1, unit: 'cucharadita', item: 'de fécula de maíz disuelta en 2 cucharadas de agua' },
  ]

  const data = {
    title: 'Pollo a la Naranja',
    intro: 'Trozos de pechuga dorados y bañados en una deliciosa salsa de naranja con toques dulces y especiados. ¡Un plato perfecto para sorprender!',
    servings: servings,
    time: '30 min',
    image: polloImg,
    steps: [
      'Sazona los trozos de pollo con sal y pimienta. Dora en una sartén caliente con aceite hasta que estén dorados.',
      'Agrega el jugo de naranja, la salsa de soya, la ralladura, el romero, la canela, la panela y el ají. Revuelve bien.',
      'Coloca las rodajas de naranja alrededor del pollo y cocina a fuego medio durante 3 a 4 minutos.',
      'Disuelve la fécula de maíz en agua, agrégala a la sartén y mezcla hasta que espese la salsa. Retira el romero y apaga el fuego.',
      'Sirve acompañado de vegetales salteados o puré de papa. ¡Disfruta de este plato dulce y aromático!',
    ],
    stepImages: [paso1, paso2, paso3, paso4,paso5],
  }

  const calculateAmount = (amount) => {
    if (!amount) return ''
    const multiplier = servings / baseServings
    const calculated = amount * multiplier
    return calculated % 1 === 0 ? calculated : calculated.toFixed(1)
  }

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const recommendations = [
    'Para una salsa más espesa, aumenta la cantidad de fécula de maíz gradualmente.',
    'Si prefieres un sabor más intenso, marina el pollo con la ralladura de naranja 30 minutos antes.',
    'Puedes sustituir la pechuga por muslos deshuesados para obtener más jugosidad.',
    'Acompaña con arroz blanco, puré de papa o vegetales salteados para un plato completo.',
    'Guarda las sobras en un recipiente hermético en el refrigerador hasta por 3 días.',
  ]

  return (
    <div className="receta-container">
      <div className="header-section">
        <h1 className="titulo">{data.title}</h1>
        <p className="intro">{data.intro}</p>
        
        <div className="info-cards">
          <div className="info-card">
            <span className="info-label">Tiempo:</span>
            <span className="info-value">{data.time}</span>
          </div>
          <div className="info-card porciones-card">
            <span className="info-label">Porciones:</span>
            <div className="porciones-control">
              <button 
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="btn-porciones"
              >
                -
              </button>
              <span className="info-value">{servings}</span>
              <button 
                onClick={() => setServings(servings + 1)}
                className="btn-porciones"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="receta-contenido">
        {/* Columna de Ingredientes */}
        <div className="ingredientes">
          <h2>Ingredientes</h2>
          <ul className="ingredientes-list">
            {ingredientsData.map((ingredient, index) => (
              <li key={index} className="ingrediente-item">
                <label className="ingrediente-label">
                  <input
                    type="checkbox"
                    checked={checkedIngredients[index] || false}
                    onChange={() => toggleIngredient(index)}
                    className="ingrediente-checkbox"
                  />
                  <span className={checkedIngredients[index] ? 'checked' : ''}>
                    {ingredient.amount && (
                      <strong className="cantidad">
                        {calculateAmount(ingredient.amount)} {ingredient.unit}{' '}
                      </strong>
                    )}
                    {ingredient.item}
                  </span>
                </label>
              </li>
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

      {/* Sección de Recomendaciones */}
      <div className="recomendaciones-section">
        <h2>Recomendaciones del Chef</h2>
        <ul className="recomendaciones-list">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}