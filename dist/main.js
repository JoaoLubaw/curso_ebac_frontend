"use strict";

var alunos = ['João'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 8
  };
});
alunos2.push({
  nome: 'Joaquim',
  nota: 5
});
alunos2.push({
  nome: 'Madson',
  nota: 3
});
alunos2.push({
  nome: 'Meri',
  nota: 10
});
function FiltraAlunos(alunos) {
  return alunos.nota >= 6;
}
var AlunosAprovados = alunos2.filter(FiltraAlunos);
console.log("Esses s\xE3o nossos alunos:");
console.log(alunos2);
console.log("Mas s\xF3 esses s\xE3o nossos alunos aprovados:");
console.log(AlunosAprovados);