import { NextFunction, Request,Response } from "express";
import { Platform } from "../protocols/movie.js";
import { platformSchema } from "../models/platformSchema.js";

export async function platformValidation(req:Request,res:Response,next:NextFunction){
    const platform = req.body as Platform
    const {error} = platformSchema.validate(platform, {abortEarly:false}) 
    
    if(error){
        res.status(400).send({
            message: error.message
        })
    }
    res.locals.platform = platform
    next();
    }