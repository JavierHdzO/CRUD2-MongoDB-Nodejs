import express from "express";
import { engine} from "express-handlebars"
import indexRoutes from './routes/index.routes'
import path from "path";
import morgan from "morgan";


//Initialization
const app = express();


//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    layoutsDir: path.join( app.get('views'), 'layouts'),
    partialsDir: path.join( app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname:".hbs",
    
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//Global Variables


//Routes
app.use(indexRoutes);
app.listen(4000);

//Static Files
app.use(express.static(path.join(__dirname,'public')));

export default app;