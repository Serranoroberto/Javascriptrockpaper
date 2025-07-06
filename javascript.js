console.log ("Hello World")
//Crear una variable que retorne prieda papel o tijera
/* 
Crear tres variables con los valores piedra papel tjeras
-Una variable que revuelva esos valores "puno cerrado" con math.random

-Funcion que retenga un valor qeu ponga el usuario "competidor"
de a tres, uno siendo piedra, dos papel y tres tijeras
-Una variable if que compare los resultados de la computadora y del usuario
0-0 empate 0-1 gana computadora 0-2 gana usuario 1-0 gana usuario 1-1 empate 1-2 gana usuario
2-0 gana usuario 2-1 gana computadora 2-2 empate*/


//Arreglo de las diferentes opciones para le juego
 const opciones = ["Piedra", "Papel", "Tijera"]

 //funcion que genere los numeros en aleatorio
 function getComputer (){
    return Math.floor(Math.random()*3) // Math.floor redondea los numeros que Math.random crea. random solo crea numeros decimales de 0 a 1
    // * 3 hace que se escale el numero para que este entre 0 y 3
 }

 function juego(){
    let inicio = prompt("Elige la opcion para iniciar el juego: \n Prieda: 1 , \n Papel: 2 \n Tijeras: 3 ");
    // variable que recoge el input del jugador
    let player2 = parseInt(inicio) -1; //creamos una variable turno que convertira el dato de inicio de string a numero(parseInt) y le restara -1 para que concida con el codigo
    //funcion para que el usuario solo ingrese un valor del 0 al 3. SI el valor es menor a 0 o mayor a 2 no se continuara con el texto
    // si lo que ingresa el usuario(turno) no es un numero (isNaN) o es menor a 0 o es mayor a 2 creara un aviso
    if(isNaN(player2)|| player2 < 0 || player2 > 2){
    console.log("Error, no puede ingrear otro dato que no sea 1 , 2, 3.");
    return;
    }
    // metemos toda la funcion getcomputer que nos da los numeros aleatorios para llamar a la funci[on y guardar el resultado en la variable]
    const jugador1 = getComputer();
    console.log("Sacaste: ", opciones[player2]);
    console.log("La compu saco: ", opciones[jugador1]);
    if (player2 == jugador1) {
        console.log ("EMPATE!!!!")
    }
    else if (
        (player2 === 0 && jugador1 === 2)||
        (player2 === 1 && jugador1 === 0)||
        (player2 === 2 && jugador1 === 1)
    ) {
        console.log("Felicidades ganaste!!!!!!!!")
    } else{
        console.log("Perdedor :-(~")
    }
}

juego();