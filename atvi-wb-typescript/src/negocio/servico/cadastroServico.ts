import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../../modelo/cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super();
        this.entrada = new Entrada();
        this.servicos = servicos;
    }
    public cadastrar(): void {
        console.log(`Início do cadastro do serviço\n`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        while (this.servicos.find(item => item.nome == nome || nome.length == 0)){
            let mensagem = nome.length == 0? '': 'Produto já cadastrado. '
            nome = this.entrada.receberTexto(`${mensagem}Por favor, informe o nome do produto: `)

        }
        let preco = this.entrada.receberTexto(`Por favor, informe o preço do serviço: `);
        while (preco.length == 0 || parseInt(preco) <= 0){
            preco = this.entrada.receberTexto(`Por favor, informe o preço do serviço: `)
        }
        let servico = new Servico(nome, parseInt(preco));
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }
}