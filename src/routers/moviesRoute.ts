import { Router } from "express";
import { getMovies,postMovies,updateMovies,deleteMovies } from "../controllers/moviesControler.js";
import { movieValidation } from "../middlewares/movieValidationMiddleware.js";
const movieRouter = Router();

movieRouter.get("/movies", getMovies);
movieRouter.post("/movies", movieValidation ,postMovies);
movieRouter.put("/movies/:id", updateMovies);
movieRouter.delete("/movies/:id", deleteMovies);

export default movieRouter