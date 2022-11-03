import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#009688 teal" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#009688 teal" />
                </>
            )
        } else if (this.state.tela === "Cadastro Cliente") {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#009688 teal" />
                </>
            )
        }

    }
}