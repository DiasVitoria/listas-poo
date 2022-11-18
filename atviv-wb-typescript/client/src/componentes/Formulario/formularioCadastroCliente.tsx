import { Component } from "react";
import Swal from "sweetalert2";
import Endereco from "../Modelo/endereco";
import Telefone from "../Modelo/telefone";


type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    private nome
    private sobrenome
    private email
    private telefone: Telefone
    private endereco: Endereco

    constructor(props) {
        super(props);
        this.telefone = new Telefone()
        this.endereco = new Endereco('', '', '', '', '', '', '')
        this.onClickEmail = this.onClickEmail.bind(this)
        this.onClickEnderecoBairro = this.onClickEnderecoBairro.bind(this)
        this.onClickEnderecoCEP = this.onClickEnderecoCEP.bind(this)
        this.onClickEnderecoCidade = this.onClickEnderecoCidade.bind(this)
        this.onClickEnderecoComplemento = this.onClickEnderecoComplemento.bind(this)
        this.onClickEnderecoEstado = this.onClickEnderecoEstado.bind(this)
        this.onClickEnderecoNumero = this.onClickEnderecoNumero.bind(this)
        this.onClickEnderecoRua = this.onClickEnderecoRua.bind(this)
        this.onClickTelefoneDDD = this.onClickTelefoneDDD.bind(this)
        this.onClickTelefoneNumero = this.onClickTelefoneNumero.bind(this)
        this.onClickNome = this.onClickNome.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickSobreNome = this.onClickSobreNome.bind(this)
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado = {
            nome: this.nome,
            sobreNome: this.sobrenome,
            email: this.email,
            endereco: this.endereco,
            telefones: [this.telefone]
        }
        await fetch("http://localhost:32832/cliente/cadastrar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })
        return retorno
    }

    async onSubmit() {
        if (!this.nome || !this.sobrenome || !this.email || !this.telefone.ddd || !this.telefone.numero || !this.endereco.rua || !this.endereco.numero || !this.endereco.bairro || !this.endereco.cidade || !this.endereco.estado || !this.endereco.codigoPostal || !this.endereco.informacoesAdicionais) {
            Swal.fire(
                'Erro!',
                'Preencha todos os campos.',
                'error'
            )
            return
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Cadastrado!',
                'Cliente cadastrado com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível cadastrar.',
                'error'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        }
    }

    onClickNome(event) {
        this.nome = event.target.value
    }
    onClickSobreNome(event) {
        this.sobrenome = event.target.value
    }
    onClickEmail(event) {
        this.email = event.target.value
    }
    onClickTelefoneDDD(event) {
        this.telefone.ddd = event.target.value
    }
    onClickTelefoneNumero(event) {
        this.telefone.numero = event.target.value
    }
    onClickEnderecoCidade(event) {
        this.endereco.cidade = event.target.value
    }
    onClickEnderecoEstado(event) {
        this.endereco.estado = event.target.value
    }
    onClickEnderecoCEP(event) {
        this.endereco.codigoPostal = event.target.value
    }
    onClickEnderecoRua(event) {
        this.endereco.rua = event.target.value
    }
    onClickEnderecoNumero(event) {
        this.endereco.numero = event.target.value
    }
    onClickEnderecoComplemento(event) {
        this.endereco.informacoesAdicionais = event.target.value
    }
    onClickEnderecoBairro(event) {
        this.endereco.bairro = event.target.value
    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h5>Cadastro de Cliente</h5>
                    <div className="row">
                        <form className="col s12">
                            <div id="modalLine" className="row">
                                <div className="input-field col s7">
                                    <input onChange={this.onClickNome} id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">nome</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="last_name" onChange={this.onClickSobreNome} type="text" className="validate" />
                                    <label htmlFor="last_name">sobrenome</label>
                                </div>
                            </div>
                            <div id="modalLine" className="row">
                                <div className="input-field col s12">
                                    <input id="email" onChange={this.onClickEmail} type="email" className="validate" />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                            </div>
                            <div id="modalLine" className="row">
                                <div className="input-field col s2">
                                    <input id="ddd" onChange={this.onClickTelefoneDDD} type="number" className="validate" />
                                    <label htmlFor="ddd">DDD</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="number" onChange={this.onClickTelefoneNumero} type="number" className="validate" />
                                    <label htmlFor="number">Número</label>
                                </div>
                            </div>
                            <h6>Endereço</h6>
                            <div id="modalLine" className="row">
                                <div className="input-field col s11">
                                    <input id="rua" type="text" onChange={this.onClickEnderecoRua} className="validate" />
                                    <label htmlFor="rua">Rua</label>
                                </div>
                                <div className="input-field col s1">
                                    <input id="numero" onChange={this.onClickEnderecoNumero} type="number" className="validate" />
                                    <label htmlFor="numero">Nº</label>
                                </div>
                            </div>

                            <div id="modalLine" className="row">
                                <div className="input-field col s12">
                                    <input id="bairro" type="text" onChange={this.onClickEnderecoBairro} className="validate" />
                                    <label htmlFor="bairro">Bairro</label>
                                </div>
                            </div>

                            <div id="modalLine" className="row">
                                <div className="input-field col s7">
                                    <input id="cidade" onChange={this.onClickEnderecoCidade} type="text" className="validate" />
                                    <label htmlFor="cidade">Cidade</label>
                                </div>
                                <div className="input-field col s2">
                                    <input id="estado" onChange={this.onClickEnderecoEstado} type="text" className="validate" />
                                    <label htmlFor="estado">Estado</label>
                                </div>
                                <div className="input-field col s3">
                                    <input id="cep" onChange={this.onClickEnderecoCEP} type="number" className="validate" />
                                    <label htmlFor="cep">CEP</label>
                                </div>
                            </div>

                            <h6>Informações adicionais</h6>
                            <div id="modalLine" className="row">
                                <div className="input-field col s12">
                                    <input id="complemento" onChange={this.onClickEnderecoComplemento} type="text" className="validate" />
                                    <label htmlFor="complemento">Informações</label>
                                </div>
                            </div>
                        </form>
                    </div >
                </div>
                <div className="modal-footer">
                    <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                        <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                    </button>
                    <button id="cadastrarButtonContainer" onClick={this.onSubmit} type="submit" name="action" className="waves-effect waves-light btn-flat">
                        <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Cadastrar
                    </button>
                </div>

            </>
        )
    }
}