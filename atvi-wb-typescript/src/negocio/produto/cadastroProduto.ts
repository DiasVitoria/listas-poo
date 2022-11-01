import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../../modelo/cadastro";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.entrada = new Entrada();
        this.produtos = produtos;
    }
    public cadastrar(): void {
        let verificacao = new VerificacaoNumero()

        console.log(`Início do cadastro do produto\n`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);
        while (this.produtos.find(item => item.nome == nome || nome.length == 0)){
            let mensagem = nome.length == 0? '': 'Produto já cadastrado. '
            nome = this.entrada.receberTexto(`${mensagem}Por favor, informe o nome do produto: `)

        }
        let preco = this.entrada.receberTexto(`Por favor, informe o preço do produto: `);
        while (preco.length == 0 || verificacao.verificar(preco) || parseInt(preco) <= 0 ){
            let mensagem = preco.length == 0? 'Por favor, informe o preço do produto: ': 'Preço inválido, reentre: '
            preco = this.entrada.receberTexto(`${mensagem}`)
        }
        let produto = new Produto(nome, parseInt(preco));
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)`);
    }
}