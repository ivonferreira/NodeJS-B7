import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
   /*let dados = {
    name: 'Francisco',
    age: 88
   };
    await User.update(dados,{
        where:{
            id:4
        }
    });*/
    /*let results = await User.findAll({ where:{ id:7 }});
    if(results.length > 0){
        let usuario = results[0];
        //usuario.age++;
        usuario.age = 18;
        usuario.name = 'Testador'
        await usuario.save();
    }*/
    /*await User.destroy({
        where:{
            age:{
                [Op.lte]:18
            }
        }
    });*/
    /*let results = await User.findAll({where:{name:'Ciclano'}});
    if(results.length > 0 ){
        let usuario = results[0];
        await usuario.destroy();
    }*/
    
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