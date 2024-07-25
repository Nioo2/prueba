



/////////////////////////////////////////////////////////////////////////////////
// funcion que calcula el precio actualizado de un producto segun ipc

function Inflation(){  

alert("sistema para remarcacion de precios por inflacion mensual")
let precioanterior = parseInt(prompt("ingrese el precio del producto correspondiente al mes anterior"))
let inflacion= parseFloat(prompt("ingrese el indice de inflacion correspondiente al mes anterior")).toFixed(2) //tube que agregar esto para corregir los decimales
let diferencia= (precioanterior*inflacion)/100
let nuevoprecio =  diferencia + precioanterior

alert("el precio del producto este mes es: "+nuevoprecio+" y la diferencia es de: "+ diferencia)

//pregunta si Repite operacion
repetir = prompt("quiere realizar un nuevo calculo? responder si o no ")
	if(repetir == "si"){Inflation()} //Reinicia el programa de inflacion
	else{alert("Volviendo al inicio")
		 Inicio()} // vuelve al principio

}// fin funcion inflacion


/////////////////////////////////////////////////////////////////////////////////
//funcio de calcular diametros cables

function Cable(){   
	alert("Calculador de diametro de cables para instalacion electrica en 220v")
	let potencia= parseInt(prompt("ingrese la potencia total en Watts de la linea de enchufes a calcular"))
	let amperes= parseFloat(potencia/220).toFixed(2)
	let diametro
		if(amperes<10){ diametro=1}
		if(amperes>=10 && amperes<14 ){ diametro=1.5}
		if(amperes>=14 && amperes<16 ){  diametro=2}
		if(amperes>=16 && amperes<20 ){  diametro=2.5}
		if(amperes>=20 && amperes<28 ){  diametro=4}
		if(amperes>=28 && amperes<37 ){ diametro=6}
		if(amperes>=37 && amperes<48 ){  diametro=8}
		if(amperes>=48 && amperes<=53 ){  diametro=10}
		if(amperes>54 ){alert("la potencia indicada supera el rango del programa. se recomienda usar otro metodo para calcular")
				diametro= "mas de 20"
				}

alert("El amperaje total en esa linea es de "+amperes+" Amperes,  por lo tanto deberas usar un cable de "+diametro+" mm2")

//Pregunta si Repite operacion
repetir = prompt("quiere realizar un nuevo calculo? responder si o no ")
	if(repetir == "si"){Cable()} //Reinicia el programa de diametro cables
	else{alert("Volviendo al inicio") 
		Inicio()} // vuelve al principio

} //Fin programa Cables


/////////////////////////////////////////////////////////////////////////////////
 // funcion Sorteo  
function Sorteo(){  
	
 
	alert("programa de sorteo por nombres")
	let nombre
	let ganador
	let tablaNombres = []

/////////////////////////
	// funcion de ingreso que se repite hasta dejar vacio
	function Ingresar(){ 
	 nombre=  prompt("ingrese nombre del Participante... para finalizar deje vacio el campo")
	if(nombre!=""){
		tablaNombres.push(nombre)
		console.log(tablaNombres)
		alert("ingrersado correctamente")
		Ingresar()
		}

	else{ 	alert("se ingresaron "+tablaNombres.length+" participantes")
			 ganador = tablaNombres[parseInt(Math.random() * tablaNombres.length)]
			 alert( "Siguiente para realizar Sorteo entre los participantes : "+tablaNombres)
			 alert( "El Ganador es : "+ganador)
			
							//Pregunta si Repite operacion
				repetir = prompt("quiere realizar un nuevo Sorteo? responder si o no ")
					if(repetir == "si"){Sorteo()} //Reinicia el programa de Sorteo
					else{alert("Volviendo al inicio") 
						Inicio()} // vuelve al principio


			}
		}// Fin ingresar


Ingresar() // inicia el primer ingreso  

	
} //Fin de l programa del sorteo







//////////////////////Inicio Ejecuciones////////////////////////////////////////////////////
Inicio() //ejecuta la funcion del menu principal 


///////////////////////////////////////////////////////////////////
 // menu principal donde elegimos que operacion realizar

function Inicio(){  
alert("Bienvenido al sistemita de calculos multiples de Nioo")
alert("indique con el numero que operacion quiere realizar")
let modo =parseInt(prompt("1 calcular inflacion, 2 calcular Diametro cables , 3 Sorteo"))


switch(modo){  // disparo de funciones segun el modo elegido

case 1:
	Inflation() 
	break
case 2: 
	Cable()
	break 
case 3: 
	Sorteo()
	break 
default:
	alert("Opcion Incorrecta, se reiniciará el programa")
	Inicio()
	break
}//fin switch

} //fin funcion inicial







alert("Fin Del Programa...  Aprete F5 para reiniciarlo")
