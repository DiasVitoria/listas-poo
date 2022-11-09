/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './myStyle.css'
import FormularioCadastroCliente from "./formularioCadastroCliente";
import VendaCliente from "./vendaCliente";
import Venda from "./venda";


type props = {
  tema: string;
};

export default class ListaCliente extends Component<props> {

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
          <h4 id="Title">Clientes cadastrados</h4>
        </div>
        <div id="collapsibleContainer">
          <ul className="collapsible">
            <li >
              <div id="collapsibleHeader" className="collapsible-header">
                Vitoria
              </div>
              <div id="collapsibleBody" className="collapsible-body">
                <span>Nome Social: Vizz</span><br />
                <span>Sexo: F</span><br />
                <span>Data de Nascimento: 12/12/1999</span><br />
                <span>CPF: 12345678912</span><br />
                <span>E-mail: vitoria@vitoria.com</span><br />
                <span>DDD: 12</span><br />
                <span>Telefone: 12345678</span><br />
                <span>Endereço: </span><br />
                <span>Caçapava-SP </span><br />
                <span>12280051 </span><br />
                <span>R. Vinte e nove de abril, 37 </span><br />
                <span>Sem Complemento</span><br />

                <div id="editDeleteButtonContainer">
                  <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                  <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                  <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                </div>
              </div>
            </li>
            <li className="">
              <div id="collapsibleHeader" className="collapsible-header">
                Thales
              </div>
              <div id="collapsibleBody" className="collapsible-body">
                <span>Nome Social: TK</span><br />
                <span>Sexo: M</span><br />
                <span>Data de Nascimento: 12/12/2000</span><br />
                <span>CPF: 12345678912</span><br />
                <span>E-mail: thales@thales.com</span><br />
                <span>DDD: 12</span><br />
                <span>Telefone: 987317482</span><br />
                <span>Endereço: </span><br />
                <span>São José dos Campos-SP </span><br />
                <span>12345967 </span><br />
                <span>R. Penedo, 300 </span><br />
                <span>76B</span><br />

                <div id="editDeleteButtonContainer">
                  <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">create</i></a>
                  <a href="#" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse"><i className="small material-icons">delete</i></a>
                  <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium pink accent-2 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                </div>
              </div>
            </li>
            <li >
              <div id="collapsibleHeader" className="collapsible-header">
                Francisco
              </div>
              <div id="collapsibleBody" className="collapsible-body">
                <span>Nome Social: Fran</span><br />
                <span>Sexo: O</span><br />
                <span>Data de Nascimento: 28/10/1999</span><br />
                <span>CPF: 12389314478</span><br />
                <span>E-mail: francisco@francisco.com</span><br />
                <span>DDD: 12</span><br />
                <span>Telefone: 129489384</span><br />
                <span>Endereço: </span><br />
                <span>Taubaté-SP </span><br />
                <span>12857463 </span><br />
                <span>R. Dois, 3 </span><br />
                <span>Sem Complemento</span><br />

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

        {/* ----------------------------------------------------------------MODAL---------------------------------------------------------------- */}

        <div id="modalCadastro" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5>Cadastro de Cliente</h5>
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

        <div id="modalEdit" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5>Edição de Cliente</h5>
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
        </div>

        <div id="modalSell" className="modal modal-fixed-footer">
          <div className="modal-content">
          <h5>Venda</h5>
            <VendaCliente tema="#ff4081 pink accent-2" />
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
          <h5>Opções</h5>
            <Venda tema="#ff4081 pink accent-2" />
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
      </div >
    );
  }
}
