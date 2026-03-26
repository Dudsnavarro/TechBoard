import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../LabelFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../tituloFomulario";
import "./formulario-de-eventos.css";

export function FormularioDeEvento({ temas }) {

  function aoFormSubmetido (formData) {
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item){
        return item.id == formData.get('tema')
      }),
      date: new Date(formData.get('dataDoEvento')),
      titulo: formData.get('nomeEvento'),
    }
    console.log(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
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
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="enderecoImagemCapa">Qual o endereco da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://example.com/imagem.jpg"
            name="capa"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataDoEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataDoEvento"
            placeholder="dataDoEvento dev hits"
            name="dataDoEvento"
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="temaDoEnvento">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoFormulario>
      </div>
      <div className="acoes">
        <Botao>criar evento</Botao>
      </div>
    </form>
  );
}
