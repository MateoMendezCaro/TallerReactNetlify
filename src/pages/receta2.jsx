import Recipe from '../components/Recipe'
export default function Brownies() {
    // Persona C: rellena con datos reales
    const data = {
        title: 'Brownies de chocolate',
        intro: 'Brownies húmedos y chocolatosos, súper fáciles.',
        servings: 8,
        time: '30 min',
        image: '/brownies.jpg', // opcional
        ingredients: [
            '100 g mantequilla',
            '150 g chocolate oscuro',
            '2 huevos',
            '120 g azúcar',
            '80 g harina de trigo',
        ],
        steps: [
            'Derrite mantequilla y chocolate.',
            'Bate huevos con azúcar, integra la mezcla de chocolate.',
            'Añade harina, vierte en molde y hornea 20–25 min a 180°C.',
        ],
    }
    return <Recipe {...data} />
}