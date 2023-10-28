import bodyParser from "body-parser";
import registerCustomer from "../routes/registerCustomer.js";
import loginCustomer from "../routes/loginCustomer.js";

export default function cofigureRoutes(app){
    app.use(bodyParser.json());
    app.use("/api/register-customer", registerCustomer);
    app.use("/api/login-customer", loginCustomer);
}
