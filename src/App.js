import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Filtro from './components/Filtro/filtro';
import Header from './components/Header/header';
import { listarSenadores } from './modules/Senadores/redux/senadoresAction';
import Senadores from './modules/Senadores/senadores';

function App() {

  const dispatch = useDispatch();
  const listaSenadores = useSelector(state => state.senadoresState.senadores);


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
    /* { value: "Estado" }, */
    { text: "Partido", valor: listaPartidos },
    { text: "Estado", valor: listaEstados }
  ];

  return (
    <>
      <Header />
      <div className="App">
        <Filtro
          item={itemFiltro}
        />
        <Senadores />
      </div>
    </>

  );
}

export default App;
