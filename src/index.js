import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/productos.routes';
import './database';

//crear una instancia de express
const app = express();
//configuracion de puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})

//midlewares
app.use(morgan('dev')); // da informacion en la terminal
app.use(cors()); //permite peticiones remotas
//permite recibir objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname,'../public')))

//aqui van las rutas
app.use('/apicafe',router)