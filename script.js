let botao = document.querySelector('.btn');
let txtAtual = document.querySelector('.textos');

let txt2 = 'Sabe qual o maior ato de coragem que um ser humano pode ter? Amar!';

let txt3 = 'Amar é estar diante da guerra e baixar suas defesas...';

let txt4 = 'Amar é como entrar na neblina sem saber o que te espera...';

let txt5 = 'É estar disposto a andar num caminho escuro, dependendo apenas da luz do outro...';

let txt6 = 'Posso te dizer que nesse primeiro mês que passamos juntos, sua luz tem me iluminado.';

let txt7 = 'Seus olhos tem me guiado, seu sorriso tem sido meu lar, e o futuro finalmente tem cor pra mim.';

let txt8 = 'Obrigado por esse incrivel mês que passamos juntos...';

let txt9 = 'Aprendendo e cuidando um do outro, é assim que vamos conseguir...';

let txt10 = 'Cuide de mim, e eu cuido de você!';

let txt11 = 'De 1 mês, para toda a vida! Eu te amo.';




let contador = 1;

botao.addEventListener("click", () => {


    if (contador == 1) {
        txtAtual.textContent = txt2;
        contador = contador + 1;

    } else if (contador == 2) {
        txtAtual.textContent = txt3;
        contador = contador + 1;

    } else if (contador == 3) {
        txtAtual.textContent = txt4;
        contador = contador + 1;

    } else if (contador == 4) {
        txtAtual.textContent = txt5;
        contador = contador + 1;

    } else if (contador == 5) {
        txtAtual.textContent = txt6;
        contador = contador + 1;

    } else if (contador == 6) {
        txtAtual.textContent = txt7;
        contador = contador + 1;

    } else if (contador == 7) {
        txtAtual.textContent = txt8;
        contador = contador + 1;

    } else if (contador == 8) {
        txtAtual.textContent = txt9;
        contador = contador + 1;

    } else if (contador == 9) {
        txtAtual.textContent = txt10;
        contador = contador + 1;

    } else if (contador == 10) {
        txtAtual.textContent = txt11;
        contador = contador + 1;
    } 



    

});