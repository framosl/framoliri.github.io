var edit=false;

 

function transformarEnEditable(nodo){

//El nodo recibido es SPAN

if (edit == false) {

var nodoTd = nodo.parentNode; //Nodo TD

var nodoTr = nodoTd.parentNode; //Nodo TR

var nodoContenedorArch = document.getElementById('contenedorArch'); //Nodo DIV

var nodosEnTr = nodoTr.getElementsByTagName('td');

var alimento = nodosEnTr[0].textContent; var calorias = nodosEnTr[1].textContent;

var grasas = nodosEnTr[2].textContent; var proteina = nodosEnTr[3].textContent;

var carbohidratos = nodosEnTr[4].textContent; var opciones = nodosEnTr[5].textContent;

var nuevoCodigoHtml = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+

'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+

'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+

'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+

'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td> <td>En edición</td>';

 

nodoTr.innerHTML = nuevoCodigoHtml;

 

nodoContenedorArch.innerHTML = 'Tendras que presionar Aceptar para guardar los cambios o Cancelar (seran anulados)'+

'<form name = "archivo" action="https://www.doctorgrekin.cl/tabla-nutricional-frutas-verduras/" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

edit = "true";}

else {alert ('Editara una sola línea. ohhh!! tendra que volverla recargar');

}

}

 

function capturarEnvio(){

var nodoContenedorArch = document.getElementById('contenedorArch'); //Nodo DIV

nodoContenedorArch.innerHTML = 'Tendras que presionar Aceptar para guardar los cambios o Cancelar (seran anulados)'+

'<form name = "archivo" action="https://www.doctorgrekin.cl/tabla-nutricional-frutas-verduras/" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+

'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+

'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+

'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+

'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+

'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

document.archivo.submit();

}

 

function anular(){

window.location.reload();

}