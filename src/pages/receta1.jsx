import Recipe from '../components/Recipe'
export default function Arepas() {
    // Persona B: rellena con datos reales
    const data = {
        title: 'Arepas clásicas',
        intro: 'Arepas sencillas de maíz, perfectas para el desayuno.',
        servings: 4,
        time: '20 min',
        image: '/arepas.jpg',
        ingredients: [
            '2 tazas de harina de maíz precocida',
            '2 tazas de agua tibia',
            '1 cdita de sal',
        ],
        steps: [
            'Mezcla harina, agua y sal hasta formar una masa suave.',
            'Forma discos de 1 cm.',
            'Asa en plancha 5–7 min por lado hasta dorar.',
        ],
    }
    return <Recipe {...data} />
}