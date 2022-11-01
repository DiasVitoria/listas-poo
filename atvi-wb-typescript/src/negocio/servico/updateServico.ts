import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Update from "../../modelo/update";

export default class UpdateServico extends Update{
    private servico: Servico;
    private entrada: Entrada;
    private empresa: Empresa;

    constructor(servico: Servico, empresa: Empresa){
        super();
        this.servico = servico;
        this.empresa = empresa;
        this.execucao = true;
        this.wasUpdated = false;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        while(this.execucao){
            console.log(`----------------------------------------------`);
            console.log(`Início do update do serviço ${this.servico.nome}`);
            console.log(`\nOpções de update:`);
            console.log(`1 - Trocar nome`);
            console.log(`2 - Alterar valor`);
            console.log(`0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);
            switch(opcao){
                case 1:
                    let newName = this.entrada.receberTexto(`Por favor, informe o novo nome do servico: `);
                    while (this.empresa.getServicos.find(item => item.nome == newName || newName.length == 0 || this.servico.nome == newName )){
                        let mensagem = newName.length == 0? 'Por favor, informe o nome do serviço: `': 'Serviço já cadastrado. Por favor, informe o nome do serviço: `'
                        mensagem = this.servico.nome == newName ? `O nome não pode ser igual ao anterior: ` : mensagem
                        newName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.servico.nome = newName;
                    console.log(`Succeso, agora o servico se chama ${this.servico.nome}`);
                    this.wasUpdated = true;
                    break;
                case 2:
                    let newValor = this.entrada.receberTexto(`Por favor, informe o novo valor do serviço: `)
                    while (this.servico.preco == parseInt(newValor) || parseInt(newValor) <= 0 || newValor.length == 0){
                        let mensagem = parseInt(newValor) <= 0 || newValor.length == 0 ? 'Por favor, informe o novo valor do serviço: ' : 'O valor não pode ser o mesmo: '
                        newValor = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.servico.preco = parseInt(newValor)
                    console.log(`Valor alterado com sucesso!`);
                    this.wasUpdated = true
                    break
                case 0:
                    this.execucao = false;
                    if(this.wasUpdated) console.log(`\nAtualizações salvas!`);
                    else console.log(`\nNenhuma atualização feita.`);
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}