// https://www.omnicalculator.com/conversion/gallons-to-quarts-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const quartsRadio = document.getElementById('quartsRadio');
const gallonsRadio = document.getElementById('gallonsRadio');

let quarts;
let gallons = v; 

// labels of the inpust
const variable = document.getElementById('variable');

quartsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Quarts';
  quarts = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(quartsRadio.checked)
    result.textContent = `Quarts = ${computequarts().toFixed(5)}`;

  else if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;
})

// calculation

function computequarts() {
  return Number(gallons.value) * 4;
}

function computegallons() {
  return Number(quarts.value) / 4;
}