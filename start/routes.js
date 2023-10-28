import bodyParser from "body-parser";


export default function cofigureRoutes(app){
    app.use(bodyParser.json());
}
