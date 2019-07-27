//5.1

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

const soma = (...params) => params.reduce((a, b) => a + b);

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2, 3, 4));


//5.2

const usuario = {
    nome: 'Gustavo',
    idade: 25,
    endereco: {
        cidade: 'Santo André',
        uf: 'SP',
        pais: 'Brasil'
    }
};

const usuario2 =
{
    ...usuario,
    nome: 'Gabriel'
};

const usuario3 =
{
    ...usuario,
    endereco:
    {
        ...usuario.endereco,
        cidade: 'Lontras'
    }
};

console.log(usuario2);
console.log(usuario3);


//6

const user = 'Diego';
const age = 23;

console.log(`O usuário ${user} possui ${age} anos`);

//7

const name = 'Diego';
const anos = 23;

const users = {
    name,
    anos,
    cidade: 'Rio do Sul'
}

console.log(users);

