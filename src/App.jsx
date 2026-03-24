import "./App.css";

function TituloFormulario(children) {
  return <h2>{children}</h2>;
}

function CampoFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function CampoDeEntrada(props) {
  return <input {...props}/>;
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <CampoFormulario>
        <Label htmlFor="nome">qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" name="nomeEvento"/>
      </CampoFormulario>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/Logo.png" alt="Logo do site techboard" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormularioDeEvento />
    </main>
  );
}

export default App;
