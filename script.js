
const h1 = document.querySelector('h1');
const pid = document.querySelector('#pid');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const bt = document.querySelector('#btCalcular');
const pResul = document.querySelector('#resul');

//form.addEventListener('submit', sumaInputsValues)

//function sumaInputsValues(event){
//    console.log({event});
//    event.preventDefault();
//    const sumaInputs =  Number(input1.value) + parseInt(input2.value);
//    pResul.innerText = "Total = "+sumaInputs;
//}

bt.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs =  Number(input1.value) + parseInt(input2.value);
    pResul.innerText = "Total = "+sumaInputs;
}

//h1.innerHTML = 'ValuVanity'
//h1.innerText = 'ValuVanity';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

//h1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');
//input.value = "456";

const img = document.createElement('img');
img.setAttribute('src','C:/Users/pc/Downloads/ValuVanity.png');

//pid.innerHTML = "";
//pid.append(img);

pid.replaceWith(img);

