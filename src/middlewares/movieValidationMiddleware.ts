import { movieSchema } from "../models/movieSchema.js";
import { NextFunction, Request,Response } from "express";
import { Movies } from "../protocols/movie.js";

export async function movieValidation(req:Request,res:Response,next:NextFunction){
const movie = req.body as Movies
const {error} = movieSchema.validate(movie, {abortEarly:false}) 

if(error){
    res.status(400).send({
        message: error.message
    })
}
res.locals.movie = movie
next();
}