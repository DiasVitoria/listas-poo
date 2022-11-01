import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Telefone from "../../modelo/telefone";
import Update from "../../modelo/update";
import VerificacaoNumero from "../verificacoes/verificacaoNumero";

export default class UpdateCliente extends Update {
    private cliente: Cliente;
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(cliente: Cliente, empresa: Empresa) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.empresa = empresa;
        this.execucao = true;
        this.wasUpdated = false;
    }

    public atualizar(): void {
        let verificador = new VerificacaoNumero()
        while (this.execucao) {
            console.log(`----------------------------------------------`);
            console.log(`Início do update do cliente ${this.cliente.nome}`);
            console.log(`\nOpções de update:`);
            console.log(`1 - Trocar nome`);
            console.log(`2 - Trocar nome social`);
            console.log(`3 - Alterar sexo`)
            console.log(`4 - Alterar telefone`);
            console.log(`\n0 - Voltar`);
            console.log(`----------------------------------------------`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`----------------------------------------------`);
            switch (opcao) {
                case 1:
                    let newName = this.entrada.receberTexto(`Por favor, informe o novo nome do cliente: `);
                    while (newName.length == 0 || this.cliente.nome == newName || newName == " ") {
                        let mensagem = newName.length == 0 || newName == " "? 'Por favor, informe o nome do cliente: ' : 'O nome não pode ser igual ao anterior: '
                        newName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.cliente.nome = newName;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o cliente se chama: ${newName}`);
                    break;

                case 2:
                    let newSocialName = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `);
                    while (newSocialName.length == 0 || this.cliente.nomeSocial == newSocialName || newSocialName == " ") {
                        let mensagem = newSocialName.length == 0 || newSocialName == " "? 'Por favor, informe o novo nome social do cliente: ': 'O nome social não pode ser igual ao anterior: '
                        newSocialName = this.entrada.receberTexto(`${mensagem}`)
                    }
                    this.cliente.nomeSocial = newSocialName;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o nome social do cliente é: ${newSocialName}`);
                    break;

                case 3:
                    let newSexo = this.entrada.receberTexto(`Por favor informe o novo sexo do cliente: `).toUpperCase();
                    while (this.cliente.sexo == newSexo) {
                        newSexo = this.entrada.receberTexto(`O sexo não pode ser igual ao anterior: `).toUpperCase()
                    }
                    while (newSexo != "M" && newSexo != "F" && newSexo != "O") {
                        if (this.cliente.sexo == newSexo) {
                            newSexo = this.entrada.receberTexto(`O sexo não pode ser igual ao anterior: `).toUpperCase()
                        } else {
                            newSexo = this.entrada.receberTexto(`Formato inválido, reentre (M,F,O): `).toUpperCase();
                        }
                    }
                    this.cliente.sexo = newSexo;
                    this.wasUpdated = true;
                    console.log(`\nSucesso, agora o sexo do cliente é: ${newSexo}`);
                    break;

                case 4:
                    let newPhoneDdd = this.entrada.receberTexto(`Por favor, informe o novo DDD do telefone: `);
                    while (newPhoneDdd.length != 2 || verificador.verificar(newPhoneDdd) || newPhoneDdd == " ") {
                        let mensagem = newPhoneDdd.length == 0 || newPhoneDdd == " "? 'Por favor, insira o DDD: ' : 'DDD inválido, reentre: '
                        newPhoneDdd = this.entrada.receberTexto(`${mensagem}`)
                    }

                    let newPhoneNumber = this.entrada.receberTexto(`Por favor, informe o novo número de telefone: `);
                    while (newPhoneNumber.length == 0 || verificador.verificar(newPhoneNumber) || this.cliente.telefone.getNumero == newPhoneNumber || newPhoneNumber == " ") {
                        let mensagem = newPhoneNumber.length == 0 || newPhoneNumber == " "? 'Por favor, insira o novo número de telefone: ' : verificador.verificar(newPhoneNumber)? 'Telefone inválido, reentre: ' : 'O telefone não pode ser igual ao anterior: ' 
                        newPhoneNumber = this.entrada.receberTexto(`${mensagem}`)
                    }
                    let newPhone = new Telefone(newPhoneDdd, newPhoneNumber);
                    this.cliente.telefone = newPhone
                    this.wasUpdated = true;
                    console.log(`\nSucesso, alterado o telefone: (${newPhone.getDdd}) ${newPhone.getNumero} `);
                    break;
                    
                case 0:
                    this.execucao = false;
                    if (this.wasUpdated) console.log(`Atualizações salvas!`);
                    else console.log(`\nNenhuma atualização feita.`);
                    console.log(`\nVoltando ao menu principal`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }


}