
import validator from 'validator';

let name: string = 'ivon'

if(validator.isLowercase(name)){
    console.log('É tudo minusculo isso')
}else{
    console.log('Não é tudo minusculo')
}

