import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
    //console.log('query string', req.query);
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;
    res.render('pages/nome',{
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => { 
    res.render('pages/idade');
}
export const idadeAction = (req: Request, res: Response) => { 
    let showAge: boolean = false;
    let idade: number = 0 ;
    let anoNasc: string = req.body.ano as string;
    if(req.body.ano){
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - parseInt(anoNasc);
        showAge = true;
    }
    res.render('pages/idade',{
        idade,
        anoNasc,
        showAge
    });
}