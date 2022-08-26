import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Filtro from './components/Filtro/filtro';
import Header from './components/Header/header';
import { listarSenadores } from './modules/Senadores/redux/senadoresAction';
import Senadores from './modules/Senadores/senadores';
import { useWindowDimensions } from './util/util';


function App() {

  const dispatch = useDispatch();
  const listaSenadores = useSelector(state => state.senadoresState.senadores);
  const ref = useRef();
  const tamanhoTela = useWindowDimensions();
  const idioma = useSelector(state => state.senadoresState.idioma.key);
  const defaultText = require(`./util/language/${idioma ? idioma : 'pt-BR'}.json`);

  useEffect(() => {
    dispatch(listarSenadores());
  }, [dispatch]);

  const partidoSenadores = [];
  const estadoSenadores = [];

  Object.entries(listaSenadores).map(itens => {
    const partido = itens[1].IdentificacaoParlamentar.SiglaPartidoParlamentar;
    partidoSenadores.push(partido);
  });

  Object.entries(listaSenadores).map(itens => {
    const estado = itens[1].IdentificacaoParlamentar.UfParlamentar;
    estadoSenadores.push(estado);
  });

  const listaPartidos = partidoSenadores.filter((item, index) => partidoSenadores.indexOf(item) === index);
  const listaEstados = estadoSenadores.filter((item, index) => estadoSenadores.indexOf(item) === index);

  const itemFiltro = [
    { tipo: "partido", text: defaultText.header.partido, valor: listaPartidos },
    { tipo: "estado", text: defaultText.header.estado, valor: listaEstados }
  ];

  return (
    <>
      <Header
        tela={tamanhoTela.width}
        item={itemFiltro}
      />
      <div className="App" ref={ref}>
        {tamanhoTela.width >= 974 ?
          <Filtro
            item={itemFiltro}
          />
          : null
        }
        <Senadores />
      </div>
    </>
  );
}

export default App;
