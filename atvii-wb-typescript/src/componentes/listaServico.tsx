/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './myStyle.css'
import FormularioCadastroServico from "./formularioCadastroServico";
import VendaServico from "./vendaServico";
import VendaServicoAll from "./vendaServicoAll";


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

    }

    render() {
        return (
            <div id="backgroundClientContainer">
                <div id="titleContainer">
                    <h4 id="Title">Serviços cadastrados</h4>
                </div>
                <div id="collapsibleContainer">
                    <ul className="collapsible">
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Manicure e Pedicure
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 30,00</span><br />
                                <span>Quantidade vendida: 6</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                    <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div id="collapsibleHeader" className="collapsible-header">
                                Corte de Cabelo
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 50,00</span><br />
                                <span>Quantidade vendida: 2</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                    <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Tintura
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 100,00</span><br />
                                <span>Quantidade vendida: 9</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                    <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="addButtonContainer">
                    <a href="#modalCadastro" className="btn-floating btn-large pink accent-2 pulse modal-trigger"><i className="large material-icons">add</i></a>
                </div>
                <div id="sellButtonContainer">
                    <a href="#modalSellAll" className="btn-floating btn-large pink accent-2 pulse modal-trigger"><i className="large material-icons">monetization_on</i></a>
                </div>


                <div id="modalCadastro" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <FormularioCadastroServico tema="#ff4081 pink accent-2" />
                    </div>
                    <div className="modal-footer">
                        <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                        </button>
                        <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Cadastrar
                        </button>
                    </div>
                </div>

                <div id="modalEdit" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <FormularioCadastroServico tema="#ff4081 pink accent-2" />
                    </div>
                    <div className="modal-footer">
                        <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                        </button>
                        <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Atualizar
                        </button>
                    </div>
                </div>

                <div id="modalSell" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h5>Venda</h5>
                        <VendaServico tema="#ff4081 pink accent-2" />
                    </div>
                    <div className="modal-footer">
                        <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                        </button>
                        <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Confirmar
                        </button>
                    </div>
                </div>

                <div id="modalSellAll" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h5>Venda</h5>
                        <VendaServicoAll tema="#ff4081 pink accent-2" />
                    </div>
                    <div className="modal-footer">
                        <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                        </button>
                        <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Confirmar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}