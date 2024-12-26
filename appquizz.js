const botaoA = document.querySelectorAll('.botaoA');
const botaoB = document.querySelectorAll('.botaoB');
const botaoC = document.querySelectorAll('.botaoC');
const botaoD = document.querySelectorAll('.botaoD');
const refazer = document.getElementById('refaz');
const botao = document.querySelector('.botao');
const numPartidas = 5;
let load = 0;

function game() {

    let click = '';
    let count = 0;
    let partida = 0;

    // Cacher les boîtes 1 2 3 4 5
    function box1() {
        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-1');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-2');
            pergProx.classList.remove('hide');
        }, 1000);
    }

    function box2() {
        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-2');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-3');
            pergProx.classList.remove('hide');
        }, 1000);
    }

    function box3() {
        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-3');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-4');
            pergProx.classList.remove('hide');
        }, 1000);
    }

    function box4() {
        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-4');
            perg.classList.add('hide');

            let pergProx = document.querySelector('#Pergunta-5');
            pergProx.classList.remove('hide');
        }, 1000);
    }

    function box5() {
        setTimeout(() => {
            let perg = document.querySelector('#Pergunta-5');
            perg.classList.add('hide');
            result();
            let pergProx = document.querySelector('#Resultado-box');
            pergProx.classList.remove('hide');
        }, 1000);
        console.log(count);
    }

    // Résultat final
    function result() {
        // Calculer le pourcentage
        let countPercent = (count * 100) / numPartidas;
        const result = document.querySelector('#result');
        const paragrafo = document.querySelector('#paragrafo');
        const buttonsResult = document.querySelector('#buttons-result');
        
        // Afficher le pourcentage
        let p = document.createElement('p');
        let texto = document.createTextNode(`${countPercent}%`);
        p.appendChild(texto);
        result.appendChild(p);
      
        // Afficher le nombre de bonnes réponses
        let texto2 = document.createTextNode(`${count} questions sur ${numPartidas}.`);
        paragrafo.appendChild(texto2);
      
        // Effacer les anciens boutons
        buttonsResult.innerHTML = '';
      
        // Ajouter le bouton selon le score
        if (countPercent === 100) {
          // Bouton pour avancer
          let button = document.createElement('button');
          button.innerHTML = '<a href="indexluv.html"> hehe click here ❤❤</a>';
          button.style.backgroundColor = 'rgb(110, 183, 110)'; // Vert pour indiquer le succès
          buttonsResult.appendChild(button);
        } else {
          // Bouton pour refaire le quiz
          let button = document.createElement('button');
          button.textContent = 'Refais eh t as pas honte';
          button.addEventListener('click', function () {
            location.reload(); // Recharger la page
          });
          button.style.backgroundColor = 'rgb(115, 114, 114)'; // Rouge pour indiquer un échec
          buttonsResult.appendChild(button);
        }
      }
      

    // Clics
    function clickA() {
        console.log('Cliquez sur A');
        click = 'A';
        partida += 1;
        botaoCorreto();
    }

    function clickB() {
        console.log('Cliquez sur B');
        click = 'B';
        partida += 1;
        botaoCorreto();
    }

    function clickC() {
        console.log('Cliquez sur C');
        click = 'C';
        partida += 1;
        botaoCorreto();
    }

    function clickD() {
        console.log('Cliquez sur D');
        click = 'D';
        partida += 1;
        botaoCorreto();
    }

    for (let i = 0; i < 5; i++) {
        // Événements
        botaoA[i].addEventListener('click', clickA);
        botaoB[i].addEventListener('click', clickB);
        botaoC[i].addEventListener('click', clickC);
        botaoD[i].addEventListener('click', clickD);
    }

    function botaoCorreto() {
        // Première question
        if (partida == 1) {
            box1();
            botaoA[0].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoA[0].style.border = '2px solid black';
            botaoB[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[0].style.border = '2px solid black';
            botaoC[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[0].style.border = '2px solid black';
            botaoD[0].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[0].style.border = '2px solid black';

            if (click == 'A') {
                count++;
            }
        } else if (partida == 2) {
            box2();
            botaoA[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[1].style.border = '2px solid black';
            botaoB[1].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoB[1].style.border = '2px solid black';
            botaoC[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[1].style.border = '2px solid black';
            botaoD[1].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[1].style.border = '2px solid black';

            if (click == 'B') {
                count++;
            }
        } else if (partida == 3) {
            box3();
            botaoA[2].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoA[2].style.border = '2px solid black';
            botaoB[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[2].style.border = '2px solid black';
            botaoC[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoC[2].style.border = '2px solid black';
            botaoD[2].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[2].style.border = '2px solid black';

            if (click == 'A') {
                count++;
            }
        } else if (partida == 4) {
            box4();
            botaoA[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[3].style.border = '2px solid black';
            botaoB[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[3].style.border = '2px solid black';
            botaoC[3].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoC[3].style.border = '2px solid black';
            botaoD[3].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[3].style.border = '2px solid black';

            if (click == 'C') {
                count++;
            }
        } else if (partida == 5) {
            box5();
            botaoA[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoA[4].style.border = '2px solid black';
            botaoB[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoB[4].style.border = '2px solid black';
            botaoC[4].style.backgroundColor = 'rgb(110, 183, 110)';
            botaoC[4].style.border = '2px solid black';
            botaoD[4].style.backgroundColor = 'rgb(255, 114, 114)';
            botaoD[4].style.border = '2px solid black';

            if (click == 'C') {
                count++;
            }
            load = partida;
        }
    }
}

// Démarrage du quiz
game();

// Bouton pour recommencer le quiz
refazer.addEventListener('click', function () {
    location.reload();
});
