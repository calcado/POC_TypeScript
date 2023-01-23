import express from "express";
import { Request, Response,} from "express";
import cors from "cors";
import movieRouter from "./routers/moviesRoute.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use(movieRouter)


app.get("/health" , (req:Request,res:Response)=> {
    res.send("funcionando")
})

app.listen(4000, ()=> {console.log("Está funcionando")});