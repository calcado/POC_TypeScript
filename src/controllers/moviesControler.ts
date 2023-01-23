import { query, Request, Response } from "express";
import { Movies, Platform } from "../protocols/movie.js";
import { listAllMovies, getPlatformTotal,insertMovie,updateMovie,deleteMovie } from "../repositories/moviesRepositories.js";

export async function getMovies(req:Request,res:Response){
    const result = await listAllMovies();
    return res.send(result.rows).status(200)

}
export async function getPlatform(req:Request,res:Response){
    const platform = await getPlatformTotal();
    return res.send(platform.rows).status(200)
}

export async function postMovies(req:Request,res:Response){
    const newMovie = res.locals.movie  as Movies;
    const result = await insertMovie(newMovie);
    return res.send(`Movie added ${result.rowCount}`).status(201)

}
export async function updateMovies(req:Request,res:Response){

}

export async function deleteMovies(req:Request,res:Response){

}