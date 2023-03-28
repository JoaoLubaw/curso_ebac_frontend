const form = document.getElementById ('form')
let maior = false;

function validacao (A, B){
    return A < B;
}

form.addEventListener ('submit', function(e) 
{
    e.preventDefault();
    const CampoA = document.getElementById('A')
    const CampoB = document.getElementById('B')
    const NA = document.getElementById('A').value
    const NB = document.getElementById('B').value
    const A = parseFloat(NA);
    const B = parseFloat(NB);
    const Mensagemsucesso = `Parabéns, a resposta é sim, os desenhos nos ensinaram direitinho e hoje você sabe que <b>${A}</b> é menor que <b>${B}</b>...A não ser que... Você não é o ChatGpt...né?`;

    maior=validacao(A,B);

    if(maior == true){
        const centersucesso = document.querySelector('.sucesso');
        document.querySelector('.erro').style.display ='none';
        centersucesso.innerHTML = Mensagemsucesso;
        centersucesso.style.display = "block"
        setTimeout(ce)

        CampoA.value = ' ';
        CampoB.value = ' ';
    }
    else{
        const centersucesso = document.querySelector('.sucesso');
        centersucesso.style.display = "none"
        document.querySelector('.erro').style.display ='block';
    }

})




    