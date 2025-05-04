import { Movies } from "../Models/Movie.js";

// add movie
export const addMovie = async (req, res) => {
  let newMovie = await Movies.create(req.body);

  res.json({ message: "Movie added successfully", newMovie });
};

// get movies
export const getMovies = async (req, res) => {
  let movies = await Movies.find();

  res.json({ message: "Fetching all movies", movies });
};

// get movie by id
export const movieById = async (req, res) => {
  let id = req.params.id;

  let moviebyid = await Movies.findById(id);

  res.json({ message: "Fetching movie by id", moviebyid });
};

// update movie by id
export const updateMovie = async (req, res) => {
  let id = req.params.id;

  let updatedMovie = req.body;

  let movie = await Movies.findByIdAndUpdate(id, updatedMovie, { new: true });

  if (!movie) return res.json({ message: "Invalid Id" });

  res.json({ message: "Movie updated Successfully",movie });
};


// delete movie by id
export const deleteMovie = async (req,res)=>{
  let id = req.params.id;
    
  let movie = await Movies.findByIdAndDelete(id);
   if (!movie) return res.json({ message: "Invalid Id" });

   res.json({ message: "Movie deleted Successfully"});
}