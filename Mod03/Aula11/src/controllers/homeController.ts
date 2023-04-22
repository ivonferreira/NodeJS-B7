import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    //build + save
    /*const user = User.build({
        name:'Fulano',
        age:25,
    });
    await user.save();*/
    
    const user = User.build({
        name:'Beltrano'
    });
    let idade: number = 2023 - 1988
    user.age = idade;

    await user.save();
    //create
    /*const user = await User.create({
        name:'Ciclano',
        age: 39
    });*/


    /*try {
        await sequelize.authenticate();
        console.log("Conexão Estabelecida");
    } catch(error){
        console.log('Deu erro',error);
    }*/
    //let searchName : string = 'Ivo'
    //let users = await User.findAll({
        // attributes :['name','age'] Usar só alguns campos
        // attributes :{exclude: ['id']} excluir um campo
        //where: { age: 30 , name:'Paula'} condicional com o 'e' ,filtragem
        /*where: { // Filtrando varios valores
            age:[55,30]
        }*/
        /*where: {
            [Op.or]: [// Operador de condições 'ou'
                {age: 55},
                {age: 30},
                {name: 'Paula'}
            ]
        }*/
        /*where:{// Outra forma com só um campo
            age: {
                [Op.or]:[30,55]
            }
        }*/
        /*where: {
            age: {
                [Op.gt]: 10, // Greater then ou maior que 40
                //[Op.gte]: 40, // Greater then or equal maior ou igual a 40
                //[Op.lt]: 40, // Lower then 40
                //[Op.lte]: 60, // Lower then or equal 40
                //[Op.between]: [40,70]// entre
                //[Op.notBetween]: [40,100]// não estao entre
                //[Op.in]:[ 30,68] // É um dos 
                //[Op.notIn]:[30,68] // Não e´um dos
                
            }*/
            /*name: {
                //[Op.like]: 'Pa%', //Começa com Pa e o resto pode ser qualquer coisa
                //[Op.like]:'%a%', //tem a letra a em qualquer posição
                [Op.like] :`%${searchName}%`,
            }*/
        /*},
        order: [
            ['name','ASC']
        ],
        offset:0,
        limit:3
        
    });*/

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        //users
    });
};