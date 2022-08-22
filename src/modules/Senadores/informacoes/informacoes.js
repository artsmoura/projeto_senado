import React from "react";
import './informacoes.css';
import { Email, Phone, Public } from '@material-ui/icons';


const InformacoesSenadores = ({ info }) => {

    return (
        <div className="infoBox">
            <div className="img" style={{
                backgroundImage: `url(${info.UrlFotoParlamentar})`,
            }}></div>
            <div className="senadorInfo">
                <div>
                    <h3>Nome Completo</h3>
                    <p>{info.NomeCompletoParlamentar}</p>
                </div>
                <div>
                    <h3>Email Parlamentar</h3>
                    <Email /><p>{info.EmailParlamentar}</p>
                </div>
                {/* <Phone /><p>{info.Telefones.Telefone[0].NumeroTelefone}</p>
                <Phone /><p>{info.Telefones.Telefone[1].NumeroTelefone}</p> */}
                <div>
                    <h3>Site Parlamentar</h3>
                    <Public /><a>{info.UrlPaginaParlamentar}</a><br></br>
                    <Public /><a>{info.UrlPaginaParticular}</a>
                </div>
                <div>
                    <h3>Quantidade de comissoes</h3>
                    <p>{info && info.comissoes ? info.comissoes.length : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default InformacoesSenadores;