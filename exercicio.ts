// arquivos na pasta criaram-se com o npx tsc --init.

const Multiplicacao = (num1: number, num2: number):number => num1 * num2;

function SayHi(nome:string): void {
    console.log(`${nome} says Hi`);
}

console.log(Multiplicacao (10, 20));
SayHi("Lorena");
