//executar no arquivo main.js por conta do Webpack

// 1.1

import ClasseUsuario from "./functions";

ClasseUsuario.info();

// 1.2

import { idade } from "./functions";

console.log(idade);

// 1.3

import Usuario, { idade as IdadeUsuario } from "./functions";
