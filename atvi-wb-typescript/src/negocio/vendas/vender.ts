import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import HistoricoConsumo from "../../modelo/historicoConsumo";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class Vender{

    private empresa: Empresa
    private entrada: Entrada
    private execucao: boolean
    private verificador: VerificacaoNumero

    constructor(empresa: Empresa){
        this.empresa = empresa
        this.entrada = new Entrada()
        this.execucao = true
        this.verificador = new VerificacaoNumero()
    }

    runOpcoes(){
        while(this.execucao){
            console.log(`\nOpções de vendas`);
            console.log(`\n1 - Vender produto`);
            console.log(`2 - Vender serviço`);
            console.log(`\n0 - Voltar`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            let receberNomeCliente;
            switch(opcao){
                case 1:
                    receberNomeCliente = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
                    let clienteProduto = this.getCliente(receberNomeCliente);
                    if(clienteProduto == undefined){
                        console.log(`Cliente não encontrado!`);
                        break;
                    }
                    let receberNomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
                    let produto = this.getProduto(receberNomeProduto);
                    if(produto == undefined){
                        console.log(`Produto não encontrado!`)
                        break;
                    }

                    let quantidadeProdutos = this.entrada.receberTexto(`Por favor informe a quantidade de produtos a ser vendida: `)

                    while(this.verificador.verificar(quantidadeProdutos) || quantidadeProdutos == " " || new Number(quantidadeProdutos).valueOf() <= 0){
                        quantidadeProdutos = this.entrada.receberTexto(`Por favor informe a quantidade de produtos a ser vendida: `)
                    }
                    let quantidadeProdutosN = new Number(quantidadeProdutos).valueOf()

                    let newProdutoConsumido = new HistoricoConsumo("produto", produto.nome, quantidadeProdutosN, (quantidadeProdutosN * produto.preco));
                    clienteProduto.getHistoricoConsumo.push(newProdutoConsumido)
                    console.log(`Venda realizada com sucesso!`)
                    produto.setQuantidadeVendida = produto.getQuantidadeVendida + quantidadeProdutosN
                    clienteProduto.quantidadeProdutos += quantidadeProdutosN
                    this.execucao = false
                    break;
                case 2:
                    receberNomeCliente = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
                    let clienteServico = this.getCliente(receberNomeCliente);
                    if(clienteServico == undefined){
                        console.log(`Cliente não encontrado!`);
                        break;
                    }
                    let receberNomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
                    let servico = this.getServico(receberNomeServico);
                    if(servico == undefined){
                        console.log(`Serviço não encontrado!`)
                        break;
                    }

                    let quantidadeServicos = this.entrada.receberTexto(`Por favor informe a quantidade de serviços a ser vendida: `)

                    while(this.verificador.verificar(quantidadeServicos) || quantidadeServicos == " " || new Number(quantidadeServicos).valueOf() <= 0){
                        quantidadeServicos = this.entrada.receberTexto(`Por favor informe a quantidade de serviços a ser vendida: `)
                    }
                    let quantidadeServicosN = new Number(quantidadeServicos).valueOf();

                    let newServicoConsumido = new HistoricoConsumo("serviço", servico.nome, quantidadeServicosN, (quantidadeServicosN * servico.preco));
                    clienteServico.getHistoricoConsumo.push(newServicoConsumido)
                    servico.setQuantidadeVendida = servico.getQuantidadeVendida + quantidadeServicosN
                    clienteServico.quantidadeServicos += quantidadeServicosN
                    console.log(`Venda realizada com sucesso!`)
                    this.execucao = false
                case 0:
                    this.execucao = false;
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }   
    }

    clienteExists(nomeCliente: string): boolean{
        let cliente = this.empresa.getClientes.find(client => client.nome == nomeCliente);
        return cliente != undefined;
    }

    getCliente(nomeCliente: string): Cliente | undefined{
        let cliente = this.empresa.getClientes.find(client => client.nome == nomeCliente);
        return cliente;
    }

    produtoExists(nomeProduto: string): boolean{
        let produto = this.empresa.getProdutos.find(prod => prod.nome == nomeProduto);
        return produto != undefined;
    }

    getProduto(nomeProduto: string): Produto | undefined{
        let produto = this.empresa.getProdutos.find(prod => prod.nome == nomeProduto);
        return produto;
    }

    servicoExists(nomeServico: string): boolean{
        let servico = this.empresa.getServicos.find(serv => serv.nome == nomeServico);
        return servico != undefined;
    }

    getServico(nomeServico: string): Servico | undefined{
        let servico = this.empresa.getServicos.find(serv => serv.nome == nomeServico);
        return servico;
    }
}