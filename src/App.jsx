import { useState } from "react";
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

const [eventos, setEventos] = useState ([
  {
    capa: 'https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1.jpg',
    tema: temas[0],
    date: new Date(),
    titulo: 'Mulheres no Front'
  }
])

function adicioarEvento (evento) {
  setEventos([...eventos, evento])
}

  return (
    <main>
      <header>
        <img src="/Logo.png" alt="Logo do site techboard" />
      </header>
      <Banner></Banner>
      <FormularioDeEvento temas={temas} aoSubmeter={adicioarEvento} />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function (item, index) {
              return <CardEvento evento={item} key={index}/>
            })} 
          </section>
        )
      })}
    </main>
  );
}

export default App;
