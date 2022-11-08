import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        return (
            <>
                <h5>Cadastro de Cliente</h5>
                <div className="row">
                    <form className="col s12">
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">nome</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">sobrenome</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">e-mail</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                        </div>
                        <h6>Endereço</h6>
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="cidade" type="text" className="validate" />
                                <label htmlFor="cidade">Cidade</label>
                            </div>
                            <div className="input-field col s2">
                                <input id="estado" type="text" className="validate" />
                                <label htmlFor="estado">Estado</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="cep" type="text" className="validate" />
                                <label htmlFor="cep">CEP</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="rua" type="text" className="validate" />
                                <label htmlFor="rua">Rua</label>
                            </div>
                            <div className="input-field col s1">
                                <input id="numero" type="text" className="validate" />
                                <label htmlFor="numero">Nº</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="complemento" type="text" className="validate" />
                                <label htmlFor="complemento">Complemento</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                        <div className="input-field col s4">
                                <input id="bairro" type="text" className="validate" />
                                <label htmlFor="bairro">Bairro</label>
                            </div>
                        </div>
                    </form>
                </div >
            </>
        )
    }
}