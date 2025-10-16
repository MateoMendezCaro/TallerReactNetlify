import Recipe from '../components/Recipe';
import arrozImg1 from '../assets/arroz-con-leche_1.png';
import arrozImg2 from '../assets/arroz-con-leche_2.png';
import arrozImg3 from '../assets/arroz-con-leche_3.png';

export default function ArrozConLeche() {
  const pasos = [
    "Lavamos el arroz. Aunque hay gente que no lo hace, yo prefiero lavar el arroz bajo el grifo con un colador hasta que el agua salga clara. Esto ayuda a que no suelte tanto almidón y quede más cremoso sin pasarse de espeso.",
    "Añadimos los ingredientes a la olla lenta. En la cubeta de la Crock Pot echamos el arroz lavado, la leche entera, la ramita de canela y la piel del limón. Aquí viene lo bueno: lo removemos un poco para repartir el arroz y cerramos la tapa.",
    "Cocinamos a temperatura baja. Ponemos la olla en modo “bajo” (low) y dejamos que se cocine durante 2 horas y media. No hace falta que abras ni remuevas durante este tiempo.",
    "Cuando hayan pasado las 2 horas y media, abrimos la olla, sacamos la ramita de canela y la piel del limón. Entonces incorporamos el azúcar y para darle un toque extra de cremosidad, la mantequilla. Mezclamos todo bien.",
    "Cocinamos 1 hora más. Con el azúcar dentro, dejamos que se cocine otra hora en temperatura baja. Si al abrirlo lo ves algo líquido, no te preocupes: al enfriar, espesará bastante.",
    "Dejamos enfriar y reposar al menos 30 minutos. Luego lo podemos pasar a recipientes individuales o dejarlo en un bol grande.",
    "Déjalo enfriar a temperatura ambiente y luego guárdalo en la nevera. Si eres impaciente como yo, igual cae una cucharadita mientras aún está templado… ¡no te juzgo!"
  ];

  const imagenes = [arrozImg1, arrozImg2, arrozImg3];

  return (
    <div className="receta-container">
      <h1>Arroz con Leche (en Olla Lenta)</h1>
      {imagenes.map((img, index) => (
        <img key={index} src={img} alt={`Arroz con leche ${index + 1}`} className="receta-img" />
      ))}
      <ol className="receta-lista">
        {pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol>
    </div>
  );
}
