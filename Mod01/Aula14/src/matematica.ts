/*export let versao: string = '1.0';
export function somar(x:number,y:number): number {
    return x + y;
}
export function subtrair(x:number,y:number):number {
    return x - y;
}
export function multiplicar(x:number, y:number):number {
    return x * y;
}*/

let versao: string = '1.0';
function somar(x:number,y:number): number {
    return x + y;
}
function subtrair(x:number,y:number):number {
    return x - y;
}
function multiplicar(x:number, y:number):number {
    return x * y;
}
export default {
    somar: somar,
    subtrair,// No js se o nome é o mesmo , não precisa colocar : e o mesmo nome
    multiplicar,
    versao
};