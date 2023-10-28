import bodyParser from "body-parser";
import registerCustomer from "../routes/registerCustomer.js"

export default function cofigureRoutes(app){
    app.use(bodyParser.json());
    app.use("/api/register-customer", registerCustomer)
}
