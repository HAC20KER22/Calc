const screenElement = document.querySelector('js-screen');

let str = '';
let arrayHistory = '';
// let artificialSun = false;
let lastkey = '';


// setTimeout(()=>{
//   alert(`This calculator's battery only lasts for a minute. 
// You need to switch on the artificial sun option by cicking 'S' on the keyboard. `)
// },60000);

// document.querySelector('.js-sun-button')
// .addEventListener('click', () => {
//   aSun();
// });


document.querySelectorAll('.numbers, .operators,.js-0,.js-decimal').forEach((buttons,index) => {
  buttons.addEventListener('click', () => {
    if(buttons.innerHTML === '÷')
      add('/');
    else if(buttons.innerHTML === '×')
      add('*');
    else if (buttons.innerHTML === '=')
      compute();
    else if (buttons.innerHTML === '−' || buttons.innerHTML === '-')
      add('-');
    else
      add(''+buttons.innerHTML);
  })
});

document.querySelector('.js-clear-button').addEventListener('click', () =>{clearScreen();});

document.body.addEventListener('keydown', event => {
  keyEval(event.key);
})


document.querySelector('.js-clear-history')
.addEventListener('click', () =>{clearHistory();});


function add(char)
{
  const screen = document.querySelector('.js-screen');
  str = str + char;
  if(lastkey === '=')
  {
    str = char;
  }
  lastkey = char;
  screen.innerHTML = str;
}

function compute()
{
  const answer = eval(str);
  const expression = str;
  document.querySelector('.screen').innerHTML = `<p class = "js-screen show-screen">${answer}</p>`;
  str=`${answer}`;
  lastkey = '=';
  history(expression, answer);
}

function history(expression,answer)
{
  const showHistory = document.querySelector('.js-history');
  let listHTML = '';
  const html = `
  <p class = "history-line">${expression}<br>= ${answer}<p>
    `;
    arrayHistory = html + arrayHistory
  showHistory.innerHTML = arrayHistory;

}

function clearScreen()
{
  const screen = document.querySelector('.js-screen');
  screen.innerHTML = '0';
  str='';
}

function keyEval(key)
{
  if('1234567890/*+-()=.'.includes(key))
    add(key);
  else if (key === 'Enter')
    compute();
  else if (key === 'C' || key === 'c')
    clearScreen();
  // else if (key === 'S' || key === 's')
  //   aSun();
}

function clearHistory()
{
  document.querySelector('.js-history')
  .innerHTML = 'History';
  arrayHistory = '';
}

// function aSun()
// {
//   if (!artificialSun)
//   {
//     document.querySelector('.js-sun-button')
//     .innerHTML = `<img src="sun2.png" class="sun">`;
//     document.querySelector('.js-solar-panel-button').innerHTML = `<img src="solar-panel-2.png" class="solar-panel">`;
//     // document.querySelector('.js-wires')
//     // .innerHTML = `<button class="wires">wires</button>`;
//     artificialSun = true;
//   }
//   else
//   {
//     document.querySelector('.js-sun-button')
//     .innerHTML = '';
//     document.querySelector('.js-solar-panel-button').innerHTML = '';
//     // document.querySelector('.js-wires')
//     // .innerHTML = '';
//     artificialSun = false;
//   }

// }

// // Button effect on keydown