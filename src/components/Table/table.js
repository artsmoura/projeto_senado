import React from 'react';
import "./table.css";
import { ChevronRight } from '@material-ui/icons';
import { setComissoes, setSenador } from '../../modules/Senadores/redux/senadoresAction';
import { useDispatch } from 'react-redux';
import InformacoesSenadores from '../../modules/Senadores/informacoes/informacoes';


const Table = ({ dados, coluna, subTable }) => {

    const dispatch = useDispatch();

    const handleSubTableOpen = (item) => {
        dispatch(setSenador(item));
        dispatch(setComissoes(item));
    };

    const TableHeadItem = ({ item }) => <div className="tableColumn">{item.cabecalho}</div>;

    const TableRow = ({ item, coluna, itemIndex }) => (
        <>
            <div className={`tableRow  ${item.isOpen ? "focus" : ''}`} onClick={() => handleSubTableOpen(item, itemIndex)}>
                <ChevronRight />
                {coluna.map((itemColuna) => {
                    return (
                        <div className='tableColumn'>
                            {item.IdentificacaoParlamentar[`${itemColuna.value}`]}
                            <span className='tableDivisor'></span>
                        </div>

                    );
                })}
            </div>
            <div className='subtable'>
                <InformacoesSenadores senador={item} />
            </div>

        </>
    );

    return (
        <div className='table'>
            <div className='tableHead'>
                <div className='tableRow'>
                    {coluna.map((item) => <TableHeadItem item={item} />)}
                </div>
            </div>
            <div className='tableBody'>
                <div className='tableContent'>
                    {dados.map((item, itemIndex) => <TableRow item={item} subtable={subTable} itemIndex={itemIndex} coluna={coluna} />)}
                </div>
            </div>
        </div>
    );

};


export default Table;