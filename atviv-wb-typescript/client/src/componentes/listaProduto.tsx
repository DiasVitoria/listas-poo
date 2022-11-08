/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './myStyle.css'


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {



    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);

            var elemsModal = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elemsModal);

        });
    }

    render() {
        return (
            <div id="backgroundClientContainer">
                <div id="titleContainer">
                    <h4 id="clientTitle">Clientes cadastrados</h4>
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
                                    <a href="#modal2" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
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
                                    <a href="#modal2" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
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
                                    <a href="#modal2" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div  id="addButtonContainer">
                    <a href="#modal1" className="btn-floating btn-large pink accent-2 pulse modal-trigger"><i className="large material-icons">add</i></a>
                </div>

{/* 
                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content">
                    <FormularioCadastroCliente tema="#ff4081 pink accent-2" />
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

                <div id="modal2" className="modal modal-fixed-footer">
                    <div className="modal-content">
                    <FormularioCadastroCliente tema="#ff4081 pink accent-2" />
                    </div>
                    <div className="modal-footer">
                        <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                        </button>
                        <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                            <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Atualizar
                        </button>
                    </div>
        </div>*/}
            </div>
        )
    }
}