class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }
    atacar(){
        let ataque = "";
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja": 
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque generico";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
let heroi1 = new Heroi("Aragorn", 87, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Hanzo", 40, "monge");
let heroi4 = new Heroi("Kaito", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();