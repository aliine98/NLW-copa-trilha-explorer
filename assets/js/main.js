function changeColor(event) {
   const body = document.querySelector('body');
   const valor = event.target.value;
   if (valor == "green") {
      body.className = 'green';
   } else if (valor == 'yellow') {
      body.className = 'yellow'
   } else {
      body.removeAttribute('class');
   }
}

const opcoesDeCores = document.querySelector('select');
opcoesDeCores.onchange = changeColor;

function createGame(player1, hour, player2) {
   return `
      <li>
         <img src="./assets/imagens/icon=${player1}.svg" alt="Ícone bandeira do ${player1}" />
         <strong>${hour}</strong>
         <img src="./assets/imagens/icon=${player2}.svg" alt="Ícone bandeira do ${player2}" />
      </li>
   `
}

let delay = -0.3;
function createCard(date, day, games) {
   delay += 0.3;
   return `
      <div class="card" style="animation-delay: ${delay}s">
         <h2>${date} <span>${day}</span></h2>
         <ul>
            ${games}
         </ul>
      </div>
   `

}

document.querySelector('.cards').innerHTML =
   createCard('24/11', 'quinta', createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +
   createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland')) +
   createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))