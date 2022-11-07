/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'



type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <div>
                <ul className="collapsible">
                    <li >
                        <div className="collapsible-header"><i className="large material-icons">account_circle</i>Cliente 1<i className="large material-icons">create</i><i className="large material-icons">delete</i></div>
                        <div className="collapsible-body">
                            <span>Nome Social:</span><br />
                            <span>Sexo:</span><br />
                            <span>RG:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>CPF:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>DDD:</span><br />
                            <span>Telefone:</span><br />
                        </div>
                    </li>
                    <li className="active">
                        <div className="collapsible-header"><i className="large material-icons">account_circle</i>Cliente 2<i className="large material-icons">create</i><i className="large material-icons">delete</i></div>
                        <div className="collapsible-body">
                            <span>Nome Social:</span><br />
                            <span>Sexo:</span><br />
                            <span>RG:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>CPF:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>DDD:</span><br />
                            <span>Telefone:</span><br />
                        </div>
                    </li>
                    <li >
                        <div className="collapsible-header">
                            <i className="blue large material-icons">account_circle</i>
                            <p className="blue">Cliente 3</p>
                            <i className="blue large material-icons">create</i>
                            <i className="blue large material-icons">delete</i></div>
                        <div className="collapsible-body">
                            <span>Nome Social:</span><br />
                            <span>Sexo:</span><br />
                            <span>RG:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>CPF:</span><br />
                            <span>Data Emissão:</span><br />
                            <span>DDD:</span><br />
                            <span>Telefone:</span><br />
                        </div>
                    </li>
                </ul>
                <div className="">
                    <div className="right">
                        <i className="medium material-icons">add_circle</i>
                    </div>
                </div>
            </div>
        )
    }
}