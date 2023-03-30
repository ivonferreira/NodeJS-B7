import express, { Request,Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response)=>{
    res.send('Olá Mundo!')
})
server.get('/contato', (req: Request, res: Response)=>{
    res.send('Esta é a pagina de contato')
})
server.listen(80);
