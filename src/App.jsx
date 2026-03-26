import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEventos";
import {FormularioDeEvento} from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";

function App() {

const temas = [
  {
    id:1,
    nome: 'front-end'
  },
  {
    id:2,
    nome: 'back-end'
  },
  {
    id:3,
    nome: 'devops'
  },
  {
    id:4,
    nome: 'inteligencia artificial'
  },
  {
    id:5,
    nome: 'data science'
  },
  {
    id:6,
    nome: 'cloud'
  }
]

const eventos =[
  {
    capa: 'src/assets/Imagem1.png',
    tema: temas[0],
    date: new Date(),
    titulo: 'Mulheres no Front'
  }
]

  return (
    <main>
      <header>
        <img src="/Logo.png" alt="Logo do site techboard" />
      </header>
      <Banner></Banner>
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]} />
          </section>
        )
      })}
    </main>
  );
}

export default App;
