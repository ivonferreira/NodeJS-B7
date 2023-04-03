import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req: Request, res:Response) => {
    let user = {
        name:'Ivon',
        age:39
    };
    res.render('home', {
        user

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