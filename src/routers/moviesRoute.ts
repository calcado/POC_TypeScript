import { Router } from "express";
import { getMovies,getPlatform,postMovies,updateMovies,deleteMovies } from "../controllers/moviesControler.js";
import { movieValidation } from "../middlewares/movieValidationMiddleware.js";
import { platformValidation } from "../middlewares/platformValidationMiddleware.js";
import { reviewValidation } from "../middlewares/reviewValidationMiddleware.js";
const movieRouter = Router();

movieRouter.get("/movies", getMovies);
movieRouter.get("/movies/platform", platformValidation, getPlatform)
movieRouter.post("/movies", movieValidation ,postMovies);
movieRouter.put("/movies/:id", reviewValidation,updateMovies);
movieRouter.delete("/movies/:id", deleteMovies);

export default movieRouter