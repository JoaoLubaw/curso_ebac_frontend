const alunos = ['João'];

const alunos2 = alunos.map (function(itemAtual) {
    return{ 
        nome:itemAtual,
        nota: 8
    }
})

alunos2.push( {
    nome: 'Joaquim',
    nota: 5
})

alunos2.push( {
    nome: 'Madson',
    nota: 3
})

alunos2.push( {
    nome: 'Meri',
    nota: 10
})

function FiltraAlunos(alunos) {
    return alunos.nota >= 6;
}

const AlunosAprovados = alunos2.filter(FiltraAlunos)


console.log(`Esses são nossos alunos:`);
console.log(alunos2)


console.log(`Mas só esses são nossos alunos aprovados:`);
console.log(AlunosAprovados)