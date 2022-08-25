import React from "react";
import './informacoes.css';
import { Email, Phone, Public } from '@material-ui/icons';


const InformacoesSenadores = ({ senador = {} }) => {
    const info = senador.IdentificacaoParlamentar;
    const comissoes = senador.comissoes;
    return (
        senador.isOpen ?
            <div className="infoBox subtable-body opened ">
                <div className="senadorImg">
                    <div className="img" style={{
                        backgroundImage: `url(${info.UrlFotoParlamentar})`,
                    }}></div>
                </div>
                <div className="senadorInfo">
                    <div className="senadorNome">
                        <h3>Nome Completo</h3>
                        <p>{info.NomeCompletoParlamentar}</p>
                    </div>
                    {info.Telefones ?
                        <div className="senadorTelefone">
                            <h3>Telefone(s)</h3>

                            {(info.Telefones.Telefone).length === undefined ?
                                <p><Phone />{info.Telefones.Telefone.NumeroTelefone}</p>
                                :
                                info.Telefones.Telefone.map((item, index) => {
                                    return <p><Phone />{item.NumeroTelefone}</p>;
                                })}
                        </div>
                        : null
                    }
                    <div className="senadorComissoes">
                        <h3>Quantidade de comissoes</h3>
                        <p>{info && comissoes.length}</p>
                    </div>
                    <div className="senadorEmail">
                        <h3>Email Parlamentar</h3>
                        <p> <Email />{info.EmailParlamentar}</p>
                    </div>
                    <div className="senadorSite">
                        <h3>Site(s) Parlamentar</h3>
                        <a href={info.UrlPaginaParlamentar} target="_blank"><Public />{info.UrlPaginaParlamentar}</a>
                        {info.UrlPaginaParticular &&
                            <a href={info.UrlPaginaParticular} target="_blank"><Public />{info.UrlPaginaParticular}</a>
                        }
                    </div>
                </div>
            </div>
            : null
    );
};

export default InformacoesSenadores;