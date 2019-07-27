//--------------- 2.1
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((usuario) => usuario.idade);

console.log(idades);


//--------------- 2.2

const filtro = usuarios.filter((usuario) =>
    usuario.idade >= 18 && usuario.empresa === 'Rocketseat');

console.log(filtro);

//--------------- 2.3

const procuraEmpresa = usuarios.find((usuario) =>
    usuario.empresa === 'Google');

console.log(procuraEmpresa);

//--------------- 2.4

const calculo = usuarios
    .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter((usuario)=> usuario.idade <=50);

console.log(calculo);


