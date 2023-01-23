import { Router } from "express";
import { getMovies,getPlatform,postMovies,updateMovies,deleteMovies } from "../controllers/moviesControler.js";
import { movieValidation } from "../middlewares/movieValidationMiddleware.js";
import { platformValidation } from "../middlewares/platformValidationMiddleware.js";
const movieRouter = Router();

movieRouter.get("/movies", getMovies);
movieRouter.get("/movies/platforms", platformValidation, getPlatform)
movieRouter.post("/movies", movieValidation ,postMovies);
movieRouter.put("/movies/:id", updateMovies);
movieRouter.delete("/movies/:id", deleteMovies);

export default movieRouter