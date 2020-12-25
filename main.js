const sessao01 = document.querySelector('#sessao-01');
const sessao02 = document.querySelector('#sessao-02');  
const btn = document.querySelector('.btn-noel');
const audio = document.querySelector('audio');

btn.addEventListener("click", aparecePresepio);


function aparecePresepio() {
    sessao01.classList.add('inativo')
    sessao02.classList.add('ativo')
    sessao02.classList.remove('inativo')
    audio.play()

    var count = 200;
    var defaults = {
    origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
    }

    fire(0.25, {
    spread: 26,
    startVelocity: 55,
    });
    fire(0.2, {
    spread: 60,
    });
    fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });    
}