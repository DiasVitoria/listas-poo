import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./listaProduto";
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#ff4081 pink accent-2" botoes={['Clientes', 'Produtos', 'Serviços' ]} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#ff4081 pink accent-2" />
                </>
            )
        } else if (this.state.tela === "Produtos") {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#ff4081 pink accent-2" />
                </>
            )
        }

    }
}