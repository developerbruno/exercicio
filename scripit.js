let bruno = "lindo";
let leticiaEbruno = "amorzinho";
let rayssa = 'gatinha'
let gabriel= 'irmaoDaleticia'
let ana = 'mae'
let kibum ='png'
let jaque  = 'irma'
let fabio = 'bimbinho'


console.log(bruno)
console.log(leticiaEbruno)
console.log(rayssa)
console.log(gabriel)
console.log(ana)
console.log(kibum)
console.log(jaque)
console.log(fabio)

// const sao variaveis que nao podem ser mudadas



let nome = 'bruno' //string
let numero = 25 //number
let estaAprovado = true //boolean
let semDefinicao = 'indefinido'; //undefined
let corSelecionado = null // redefinir

// Objetos
 let pessoa = {
    bruno: 'lindo',
    leticiaEbruno: 'amorzinho',
    rayssa: 'gatinha',
    gabriel: 'irmaoDaleticia',
    ana: 'mae',
    kibum: 'png',
    jaque: 'irma',
    sobrenome: 'rangel'

 };

 console.log(pessoa)

 // Arrays

 let numerinhos = [25,45,54,67,89,97];
 console.log(numerinhos[0]);
    
 let bolos = ['nutella','leite','bicoito','ganache'];
 console.log(bolos[2]);

 let amigo = ['igor',30,'fumante','araruama'];
 console.log(amigo[3]);

 //funçao

 
 let roupa = "camisa";

 function trocarRoupa(superior,inferior){
    roupa = superior+ ' ' + inferior;
 };

 console.log(roupa)
 trocarRoupa("lingiere","sutia");
 console.log(roupa);

let cna = "curso";

function estudoCurso(ingles,espanhol){
    cna= ingles+ ' '+ espanhol;

};

console.log(cna);
estudoCurso("latin","grego");
console.log(cna);

function dizerNome(){
    console.log('bruno');
}

dizerNome();

function MultiplicarporDois(valor){
    return valor* 2;
}

console.log(MultiplicarporDois(90));

function somarMaisDois(soma){
    return soma+2;
}

console.log(somarMaisDois(80));

function subtrairPorUm (diminuir){
    return diminuir - 1;
}

console.log(subtrairPorUm(40));

function dividirPorDois (divisao){
    return divisao /2;
}

console.log(dividirPorDois(4))

let resultadoDivisao = dividirPorDois(63);
console.log(resultadoDivisao)

let salario = 100

console.log(salario + salario);

console.log(salario * salario);

console.log(salario - salario);

console.log(salario / salario);

console.log(++salario);
console.log(--salario);

let valorTecladoGamer = 100;

console.log(valorTecladoGamer += valorTecladoGamer);
console.log(valorTecladoGamer -= valorTecladoGamer);
console.log(valorTecladoGamer *= valorTecladoGamer);
console.log(valorTecladoGamer /= valorTecladoGamer);

console.log( 2 === 2);



let pontos = 500

let tipo = pontos>100 ? 'premium' : 'comum';
console.log(tipo)

let idadizinha = 40
let experiencia = idadizinha<100 ? 'jovem' : 'idoso';
console.log(experiencia);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

let menorDeIdade = true;
let NaoPossuiCarteiraDeTrabalho = false;
let naoPodeAplicar = menorDeIdade || NaoPossuiCarteiraDeTrabalho;

console.log(!naoPodeAplicar);

let a = 'azul';
let b = 'vermelho';

let c = a;
a = b;
b=c;

console.log(a);
console.log(b);
 const soma = function(number1, number2){
    console.log(number1 * number2)
 }

 soma(5,7);

const sub = function(number3, number4, number5){
    console.log(number3 - number4 - number5)
}

sub(8,6,9)

function vitamina (fruta1, fruta2, fruta3){
    return fruta1 + fruta2 + fruta3
}

const copo = vitamina('moranguinho','bananinha','maracuja');

console.log(copo)

function feijoada (ingrediente1, ingrediente2){
    return ingrediente1 + ingrediente2
}

const panela = feijoada('liguiça','feijao');

console.log(panela)

function porcentagem(n1,n2){
    return (n2 / n1) * 100
}

let x = 80
let y = 10
let pct = porcentagem(x,y)

console.log(`${pct}% de ${x} é ${y}`)

function calcularImovel(metragem,quartos){
    let m2 = 3000
    let preco =0;
    switch (quartos) {
        case 1 :
            default:
                preco = metragem * m2
                break;

                case2 :
                preco = metragem * ( m2 * 1.2);
                break;

                case3 :
                preco = metragem * (m2 * 1.5);
                break;
    }
    return preco;
}

let metragem = 123;
let quartos = 5;
let preco = calcularImovel(metragem,quartos);
console.log(`a casa custa R$ ${preco}`);



function validar (usuario,senha){
    if(usuario ==='pedro' && senha === 123){
        return true
    } else{
        return false
    }
}

let usuario = 'bruno';
let senha = 321;
let validacao = validar(usuario,senha);

if(validacao){
    console.log('acesso concedido')
}else {
    console.log('acesso negado')
}