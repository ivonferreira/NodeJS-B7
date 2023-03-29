//import {somar, subtrair} from './matematica'; // Importa só somar e subtrair
//import * as matematica from './matematica'; // Importa tudo no arquivo
import matematica from './matematica'

let n1:number = 10;
let n2:number = 2;



console.log('SOMA: '+matematica.somar(n1,n2));
// console.log('SOMA: '+somar(n1,n2)); // Importação individual
console.log('SUBTRAÇÃO: '+matematica.subtrair(n1,n2));
// console.log('SUBTRAÇÃO: '+subtrair(n1,n2)); // Importação individual
console.log('MULTIPLICAÇÃO: '+matematica.multiplicar(n1,n2));