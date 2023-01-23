import connection from "../database/db.js";
import { Request, Response,RequestParamHandler } from "express";
import { MovieId, Movies,Platform, Review } from "../protocols/movie.js";
import { QueryResult} from "pg";


export async function listAllMovies(): Promise <QueryResult<Movies>>{
    return connection.query(`SELECT * FROM movies;`);
    
}

export async function getPlatformTotal(plat: Platform): Promise <QueryResult<Platform>> {
    return connection.query(`SELECT COUNT(id), platform FROM movies WHERE platform=$1;`,[plat.platform]);
}

export async function insertMovie(movie: Movies): Promise<QueryResult<Movies>>{
    return connection.query(`INSERT INTO movies (name, platform, genre, status, notes) VALUES($1,$2,$3,$4);`,
    [movie.name, movie.platform, movie.genre,movie.status, movie.notes ]);

}
export async function updateMovie(review: Review): Promise<QueryResult<Review>>{
    return connection.query(`UPDATE movies SET status=$1 , notes =$2;`, [review.status,review.notes]);
}

export async function deleteMovie(id:string){
    return connection.query(`DELETE FROM movies WHERE id=$1;`[id])
}