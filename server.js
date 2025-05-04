import express from "express";
import mongoose from "mongoose";
import bodyParse from "express";
import {
  addMovie,
  getMovies,
  movieById,
  updateMovie,
  deleteMovie,
} from "./controllers/movie.js";

const app = express();
app.use(bodyParse.json());

mongoose
  .connect(
    "mongodb+srv://codesnippet02:8Fv0mn49CM9hwWtG@cluster0.oxpr5.mongodb.net/",
    {
      dbName: "Movie_API",
    }
  )
  .then((msg) => console.log("Mongodb Connected Successfully..!"))
  .catch((err) => console.log(err.message));

// movie get
app.get("/movies", getMovies);

// get movie by id
app.get("/movies/:id", movieById);

// movie add
app.post("/movies/add", addMovie);

// update movie by id
app.put("/movies/:id", updateMovie);

// delete movie by id
app.delete("/movies/:id", deleteMovie);

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
