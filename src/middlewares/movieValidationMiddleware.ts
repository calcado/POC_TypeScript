import { movieSchema } from "../models/movieSchema";
import { NextFunction, Request,Response } from "express";

export async function schemaValidation(req:Request,res:Response,next:NextFunction){
const movie = req.subdomains
const {error} = movieSchema.validate(movie, {abortEarly:false}) 

if(error){
    res.status(400).send({
        message: error.message
    })
}
next();
}