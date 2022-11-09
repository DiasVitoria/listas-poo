import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        return (
            <>
                <h5>Cadastro de Serviço</h5>
                <div className="row">
                    <form className="col s12">
                        <div id="modalLine" className="row">
                            <div className="input-field col s7">
                                <input id="name" type="text" className="validate" />
                                <label htmlFor="name">nome</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="price" type="text" className="validate" />
                                <label htmlFor="price">Preço</label>
                            </div>
                        </div>
                    </form>
                </div >
            </>
        )
    }
}