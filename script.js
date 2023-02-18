let btnCalcular = document.querySelector('#btn-calcular');
let btnLimpar = document.querySelector('#btn-limpar');

function calcular(event) {
    event.preventDefault();
    let resultado = document.querySelector('#resultado');
    let tabela = document.querySelector('#tabela');

    resultado.style.display = 'block';
    tabela.style.display = 'table';

    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let imc = peso / (altura * altura) || 0;

    resultado.innerHTML = 'O seu IMC é ' + imc.toFixed(2);

    const elements = document.querySelectorAll('.bg-success');

    elements.forEach((element) => {
        element.classList.remove('bg-success');
        element.classList.remove('text-white');
    });

    if (imc < 18.5) {
        let linha = document.querySelector('#result_calc_0');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 18.5 && imc <= 24.9) {
        let linha = document.querySelector('#result_calc_1');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 25.0 && imc <= 29.9) {
        let linha = document.querySelector('#result_calc_2');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 30.0 && imc <= 39.9) {
        let linha = document.querySelector('#result_calc_3');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 40.0) {
        let linha = document.querySelector('#result_calc_4');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

}

function limpar(event) {
    event.preventDefault();
    let resultado = document.querySelector('#resultado');
    let tabela = document.querySelector('#tabela');
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');

    resultado.style.display = 'none';
    tabela.style.display = 'none';
    altura.value = '';
    peso.value = '';
}

btnCalcular.addEventListener('click', calcular);
btnLimpar.addEventListener('click', limpar);
