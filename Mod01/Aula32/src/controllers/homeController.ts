import { Request,Response } from "express";
import { Product } from '../models/Product'

export const home = (req: Request, res:Response) => {
    let age:number = 38;
    let showOld: boolean = false;
    if(age>50){
        showOld = true
    }
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);


    res.render('pages/home', {
        name:'Ivon',
        lastName:'Ferreira',
        age,
        showWelcome: true,
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [
         //   'Alguma coisa do dia',
            'Força para não ficar liso',
            'Boletos chegando, força e foco'
        ]
    });
}