import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req: Request, res:Response) => {
    let age:number = 38;
    let showOld: boolean = false;
    if(age>50){
        showOld = true
    }
    res.render('home', {
        name:'Ivon',
        lastName:'Ferreira',
        age,
        showWelcome: true,
        showOld
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de Contato');
});
router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa');
});
router.get('/noticias', (req: Request, res: Response) => {
    res.send('Página de noticias cadastradas');
});

export default router;