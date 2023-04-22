import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    /*let usuario = await User.findOne({
        where:{
            id:1
        }
    })*/
    /*let usuario = await User.findByPk(2);
    if(usuario){
        console.log(`O usuário ${usuario.name} possui ${usuario.age} anos.`)
    }else{
        console.log('Usuário não encontrado!')
    }*/
    const [ usuario, created ]= await User.findOrCreate({
        where:{
            name:'Saulo'
        },
        defaults:{
            age: 58
        }
    });
    if(created){
        console.log(`Usuário: ${usuario.name} criado com sucesso`    )
    }else{
        console.log(`Usuário: ${usuario.name} já encontrado`)
    }


    
    let users = await User.findAll({
        order:['id']
    });

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
        users,
    });
};
export const novoUsuario = async (req: Request , res: Response) => {
    let { name, age} = req.body;
    if(name){
        const newUser = User.build({ name });
        if(age) {
            newUser.age = parseInt(age);
        }
        await newUser.save()
    }
    res.redirect('/')
}