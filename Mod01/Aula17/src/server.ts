import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'
const server = express();

//console.log(path.join(__dirname, '../public'));
server.use('/static', express.static(path.join(__dirname, '../public')))
server.use(mainRoutes);
server.use('/painel',painelRoutes)
server.use((req: Request,res: Response)=>{
  res.status(404).send('Erro 404, Página não encontrada')  
})
server.listen(80);
