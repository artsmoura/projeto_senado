import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Filtro from './components/Filtro/filtro';
import Header from './components/Header/header';
import { listarSenadores } from './modules/Senadores/redux/senadoresAction';
import Senadores from './modules/Senadores/senadores';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarSenadores());
  }, []);

  const itemFiltro = [
    { value: "Estado" },
    { value: "Partido" }
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
