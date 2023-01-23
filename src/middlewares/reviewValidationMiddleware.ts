import { NextFunction, Request,Response } from "express";
import { Review } from "../protocols/movie.js";
import { reviewSchema } from "../models/reviewSchema.js";

export async function reviewValidation(req:Request,res:Response,next:NextFunction){
    const review = req.body as Review
    const {error} = reviewSchema.validate(review, {abortEarly:false}) 
    
    if(error){
        res.status(400).send({
            message: error.message
        })
    }
    res.locals.review = review
    next();
    }