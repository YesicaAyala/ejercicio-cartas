document.querySelector('#registrar').addEventListener('click', function() { 
	guardarCarta();
	pintarTabla();
});


$(".btncarta").click(function(){
  var datos = localStorage.getItem('datos');

	datos = JSON.parse(datos);

	for(let item of datos) {
		if(item.numero == this.dataset.carta) {
			item.cantidad ++;
		}
	}

	localStorage.setItem('datos', JSON.stringify(datos));
	pintarTabla();
});
/*
document.querySelector('.btncarta').addEventListener('click', function() { 

	var datos = localStorage.getItem('datos');

	datos = JSON.parse(datos);

	for(let item of datos) {
		if(item.numero == this.dataset.carta) {
			item.cantidad ++;
		}
	}

	localStorage.setItem('datos', JSON.stringify(datos));
	pintarTabla();

});
*/
function guardarCarta(){

	var numero = document.querySelector('#numero').value;
	var carta = document.querySelector('#carta').value;
	var datos = localStorage.getItem('datos');

	datos = JSON.parse(datos);

	var dato = {numero: numero, carta: carta, cantidad: '0'};

	datos.push(dato);

	localStorage.setItem('datos', JSON.stringify(datos));
}

function cargarJSON(){
	var miObjeto = [
				{ 'numero': '10', 'carta': 'Bloqueo', 'cantidad': '2' },
				{ 'numero': '13', 'carta': 'Cambio de Color', 'cantidad': '3' }];
		localStorage.setItem('datos', JSON.stringify(miObjeto));
}

function pintarTabla(){
	var datos = localStorage.getItem('datos');

	let res = document.querySelector('#listado');
		res.innerHTML = '';

	console.log('objetoObtenido: ', JSON.parse(datos));
	datos = JSON.parse(datos);

	for(let item of datos) {
		res.innerHTML += `<tr>
  				<td>${item.numero}</td>
  				<td>${item.carta}</td>
  				<td>${item.cantidad}</td>
			</tr>`;
	}
}


function leerJSON() {
            $.getJSON("../data/datos.json", function(datos) {
                console.log(datos);
            });
        }
leerJSON();
cargarJSON();
pintarTabla();


const USER = "admin";
const PASS = "1234";

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);

  if (formData.get("user") === USER && formData.get("pass") === PASS) {
    localStorage.setItem("user", USER);
    window.location.href = "../html/login.html";
  } else {
    alert("Contraseña Incorrecta");
  }
});


