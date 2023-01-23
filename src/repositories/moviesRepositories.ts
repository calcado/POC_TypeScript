import connection from "../database/db.js";
import { Request, Response,} from "express";
import { Movies } from "../protocols/movie.js";
import { Query } from "pg";


export async function listAllMovies(query: Query) {
 return await connection.query(`SELECT * FROM movies;`);
    
}

export async function insertMovie(movie: Movies){


 return await connection.query(`INSERT INTO movies (name, platform, genre, status, notes) VALUES($1,$2,$3,$4);`)
 
}
export async function updateMovie(req:Request, res:Response){
return await connection.query(`UPDATE movies SET status=$1 AND notes =$2;`)

}

export async function deleteMovie(req:Request, res:Response){

return await connection.query(`DELETE FROM movies WHERE id=$1;`)
}