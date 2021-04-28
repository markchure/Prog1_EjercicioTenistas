/*Hacer programa en JS que permita obtener estadísticas de un torneo de tenis en el que participaron más de 50 jugadores.

Se juega a dos rondas y el puntaje total de cada jugador es la suma de sus dos rondas.

De cada participante, se ingresará el nombre, puntaje que obtuvo en la primera ronda y el puntaje que obtuvo en la segunda.

No hay datos incorrectos.
El fin de ingreso está dado por el nombre: "FIN" y ambos puntajes en 0

Al final, indicar: 
Cuántos jugadores mejoraron su desempeño de la primera a la segunda ronda (o sea, tuvieron mejor puntaje en la segunda ronda),
cuál fue el puntaje total máximo del torneo, nombre de un jugador que obtuvo ese puntaje total máximo (si hubiera varios, cualquiera de ellos) y cantidad de jugadores que obtuvieron ese puntaje total máximo.*/
let cantidadJugadores = 0;
let nombreJugador = "";
let ronda1 = 0;
let ronda2 = 0;

let cantidadMejorDesempeno = 0;
let maximoDePuntajeValor = 0;
let maximoDePuntajeNombre = "";

//Tip: Podemos negar la condición de salida para entrar al while
while(!(nombreJugador == "Fin" && ronda1 == 0 && ronda2 == 0)) {
  cantidadJugadores++;

  nombreJugador = prompt("Ingrese el nombre del jugador: " + cantidadJugadores);
  ronda1 = parseInt("Ingrese el número de ronda1 para " + nombreJugador);
  ronda2 = parseInt("Ingrese el número de ronda2 " + nombreJugador);

  if (ronda2 > ronda1){
    cantidadMejorDesempeno++;
  }
  
  let total = ronda1 + ronda2;

  if (total > maximoDePuntajeValor){
      maximoDePuntajeValor = total;
      maximoDePuntajeNombre = nombreJugador; 
  }
}

console.log("La cantidad de jugadores que mejoran su desempeño fue " + cantidadMejorDesempeno);
console.log("El jugador que obtuvo el máximo fue " + maximoDePuntajeNombre + " con puntaje total " + maximoDePuntajeValor);