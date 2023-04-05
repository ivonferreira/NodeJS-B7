import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req: Request, res:Response) => {
    let age:number = 38;
    let showOld: boolean = false;
    if(age>50){
        showOld = true
    }
    res.render('pages/home', {
        name:'Ivon',
        lastName:'Ferreira',
        age,
        showWelcome: true,
        showOld,
        products: [
            {title:'Produto X', price:'10'},
            {title:'Produto Y', price:'15'},
            {title:'Produto W', price:'20'}
        ],
        frasesDoDia: [
         //   'Alguma coisa do dia',
         //   'Força para não ficar liso',
         //   'Boletos chegando, força e foco'
        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre');
});
router.get('/noticias', (req: Request, res: Response) => {
    res.render('pages/noticias');
});



export default router;