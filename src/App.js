import logo from './logo.svg';
import './App.css';
import { Peliculas } from './Peliculas';
import { PageWrapper } from './PageWrapper';
import peliculasJson from './peliculas.json'

function App() {
  let peliculas = peliculasJson;

  return (
    <div>
      <PageWrapper>
        {/* Aqui debe ir mi componenete */}
        {
          peliculas.map((pelicula) =>
            <Peliculas
              titulo={pelicula.titulo}
              rate={pelicula.rate}
              director={pelicula.director}
              actores={pelicula.actores}
              year={pelicula.year}
              fecha={pelicula.fecha}
              imgURL={pelicula.imgURL}
            >
              {pelicula.descripcion}
            </Peliculas>
          )
        }
      </PageWrapper>
    </div>
  );
}

export default App;
