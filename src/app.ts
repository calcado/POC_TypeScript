import express from "express";
import { Request, Response,} from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());




app.get("/health" , (req:Request,res:Response)=> {
    res.send("funcionando")
})

app.listen(4000, ()=> {console.log("Está funcionando")});