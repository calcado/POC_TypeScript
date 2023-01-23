import { Request, Response } from "express";
import { Movies } from "../protocols/movie.js";
import { listAllMovies } from "../repositories/moviesRepositories.js";

export async function getMovies(req:Request,res:Response){
const result = listAllMovies();
return res.send(result)

}

export async function postMovies(req:Request,res:Response){
const {name, platform, genre, status, notes} = req.body  as Movies;


}
export async function updateMovies(req:Request,res:Response){

}
export async function deleteMovies(req:Request,res:Response){

}