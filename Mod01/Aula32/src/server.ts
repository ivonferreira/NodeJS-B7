import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express'
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'
import dotenv from 'dotenv'

dotenv.config();

const server = express();


server.set('view engine','mustache');
server.set('views', path.join(__dirname,'../src/views'))
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true})); 

server.use(mainRoutes);

server.use('/painel',painelRoutes)

server.use((req: Request,res: Response)=>{
  res.status(404).send('Erro 404, Página não encontrada')  
})

server.listen(process.env.PORT);
