/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './myStyle.css'
import FormularioCadastroProduto from "./formularioCadastroProduto";
import VendaProduto from "./vendaProduto";
import VendaProdutoAll from "./vendaProdutoAll";


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {

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
                    <h4 id="Title">Produtos cadastrados</h4>
                </div>
                <div id="collapsibleContainer">
                    <ul className="collapsible">
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Esmalte
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 5,00</span><br />
                                <span>Quantidade vendida: 3</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                    <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div id="collapsibleHeader" className="collapsible-header">
                                Shampoo
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 9,00</span><br />
                                <span>Quantidade vendida: 6</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                    <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>

                                </div>
                            </div>
                        </li>
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Condicionador
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Preço R$: 13,00</span><br />
                                <span>Quantidade vendida: 5</span><br />

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

{/* ---------------------------------------------------------MODAL--------------------------------------------------------- */}

                <div id="modalCadastro" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h5>Cadastro de Produtos</h5>
                        <FormularioCadastroProduto tema="#ff4081 pink accent-2" />
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
                        <h5>Edição de Produtos</h5>
                        <FormularioCadastroProduto tema="#ff4081 pink accent-2" />
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
                        <VendaProduto tema="#ff4081 pink accent-2" />
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
                        <VendaProdutoAll tema="#ff4081 pink accent-2" />
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