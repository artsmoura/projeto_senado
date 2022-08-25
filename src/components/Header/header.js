import React, { useRef, useState } from "react";
import '../Header/header.css';
import SearchIcon from '@material-ui/icons/Search';
import Input from "../Input/input";
import { filtroSenadores } from "../../modules/Senadores/redux/senadoresAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Filtro from "../Filtro/filtro";
import { FilterList } from '@material-ui/icons';
import Button from "../Button/button";
import { useOutsideClick } from "../../util/util";

const Header = ({ tela, item }) => {

    const dispatch = useDispatch();
    const filtro = useSelector(state => state.senadoresState.filtro);
    const ref = useRef();

    const [filtroOpen, setFiltroOpen] = useState(false);
    const handleFilterOpen = () => {
        setFiltroOpen(!filtroOpen);
    };

    const setFiltro = (e) => {
        let itemFiltro = {
            tipo: e.target.name,
            value: e.target.value
        };
        dispatch(filtroSenadores(itemFiltro));
    };

    useOutsideClick(ref, () => setFiltroOpen(false));

    return (
        <header className="headerBox">
            {tela <= 974 ?
                <div className="headerMobile" ref={ref}>
                    <Button
                        id="btnFiltro"
                        type="btnIcone"
                        titulo="btnFiltro"
                        children={<FilterList />}
                        action={() => handleFilterOpen()}
                    />
                    <div className={`filtroHeader ${filtroOpen}`}>
                        <Filtro
                            item={item}
                            filtroHeader={filtroOpen}
                        />
                    </div>

                </div>
                :
                null
            }
            <Input
                id={'pesquisar'}
                name={'pesquisaGeral'}
                placeholder={'Pesquisar Nome'}
                value={filtro.tipo === 'pesquisaGeral' ? filtro.value : ''}
                changeInput={(e) => setFiltro(e)}
                leftButton={{
                    text: 'Pesquisar',
                    icon: <SearchIcon />
                }}
            />
        </header>
    );
};

export default Header;