const sessao01 = document.querySelector('#sessao-01');
const sessao02 = document.querySelector('#sessao-02');

const btn = document.querySelector('.btn-noel');


btn.addEventListener("click", aparecePresepio);

function aparecePresepio() {
    sessao01.classList.add('inativo')
    sessao02.classList.add('ativo')
    sessao02.classList.remove('inativo')
}