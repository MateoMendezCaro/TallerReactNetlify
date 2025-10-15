export default function Recipe({ title, intro, servings, time, image,
    ingredients = [], steps = [] }) {
    return (
        <article className="recipe">
            <header>
                <h2>{title}</h2>
                <p className="muted">Rinde: {servings} · Tiempo: {time}</p>
            </header>
            {image && (
                <img className="recipe-img" src={image} alt={title} />
            )}
            <p>{intro}</p>
            <div className="recipe-grid">
                <section>
                    <h3>Ingredientes</h3>
                    <ul>
                        {ingredients.map((it, idx) => <li key={idx}>{it}</li>)}
                    </ul>
                </section>
                <section>
                    <h3>Pasos</h3>
                    <ol>
                        {steps.map((st, idx) => <li key={idx}>{st}</li>)}
                    </ol>
                </section>
            </div>
        </article>
    )
}