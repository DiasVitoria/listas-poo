import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import ListagemDados from "../negocio/listagens/listagemDados";
import OpcoesCliente from "../negocio/opcoes/opcoesCliente";
import OpcoesProduto from "../negocio/opcoes/opcoesProduto";
import OpcoesServico from "../negocio/opcoes/opcoesServico";
import Vender from "../negocio/vendas/vender";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true


let cliente = new Cliente('vitoria','vizz',new CPF('123',new Date()),new RG('123',new Date()),'F',new Telefone('12','12345678'))
let cliente2 = new Cliente('thales','tk',new CPF('1234',new Date()),new RG('1234',new Date()),'M',new Telefone('12','9991447670'))
let cliente3 = new Cliente('teste','tst',new CPF('1235',new Date()),new RG('1235',new Date()),'O',new Telefone('12','36163183'))
let cliente4 = new Cliente('valorant','vava',new CPF('1236',new Date()),new RG('1236',new Date()),'M',new Telefone('12','23727411'))
empresa.getClientes.push(cliente, cliente2, cliente3, cliente4)
let produto = new Produto('agua',2)
let produto2 = new Produto('cafe',3)
let produto3 = new Produto('misto',5)
let produto4 = new Produto('bolo',10)
empresa.getProdutos.push(produto, produto2, produto3, produto4)
let servico = new Servico('limpeza',20)
let servico2 = new Servico('costura',15)
let servico3 = new Servico('tecnico',30)
empresa.getServicos.push(servico, servico2, servico3)


while (execucao) {
    console.log(`----------------------------------------------`);
    console.log(`Opções:`);
    console.log(`\n1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Vender produto/serviço`)
    console.log(`\n5 - Listagens de negócio`);
    console.log(`\n0 - Sair`);
     let entrada = new Entrada()
    console.log(`----------------------------------------------`);
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch (opcao) {
        case 1:
            let clientes = new OpcoesCliente(empresa)
            clientes.runOpcoes()
            break;
        case 2:
            let produtos = new OpcoesProduto(empresa)
            produtos.runOpcoes()
            break;
        case 3:
            let servicos = new OpcoesServico(empresa)
            servicos.runOpcoes()
            break;
        case 5:
            let listarDados = new ListagemDados(empresa);
            listarDados.listar();
            break;
        case 4:
            let venderProdServ = new Vender(empresa);
            venderProdServ.runOpcoes();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}