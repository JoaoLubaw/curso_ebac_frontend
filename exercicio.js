"use strict";
// arquivos na pasta criaram-se com o npx tsc --init.
const Multiplicacao = (num1, num2) => num1 * num2;
function SayHi(nome) {
    console.log(`${nome} says Hi`);
}
console.log(Multiplicacao(10, 20));
SayHi("Lorena");
