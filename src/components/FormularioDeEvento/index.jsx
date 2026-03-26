import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../LabelFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../tituloFomulario";
import "./formulario-de-eventos.css";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
          <Label htmlFor="dataDoEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataDoEvento"
            placeholder="dataDoEvento dev hits"
            name="dataDoEvento"
          />
           <Label htmlFor="temaDoEnvento">Tema do evento</Label>
           <ListaSuspensa />
        </CampoFormulario>
      </div>
      <div className="acoes">
        <Botao>
          criar evento
        </Botao>
      </div>
    </form>
  );
}
