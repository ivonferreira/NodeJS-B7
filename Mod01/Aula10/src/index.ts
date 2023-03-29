
import validator from 'validator';

let name: string = 'ivon'

if(validator.isLowercase(name)){
    console.log('É tudo minusculo')
}else{
    console.log('Não é tudo minusculo')
}

console.log(validator.isIP('100.0.222.155'))