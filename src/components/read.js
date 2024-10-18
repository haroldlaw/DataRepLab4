import Movies from "./movie";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
    // useState hook to manage the movies state
    const [movies, setMovies] = useState([]);

    // useEffect to fetch data
    useEffect(
        ()=>{
            // Making a GET request to fetch movie data from the API
            axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
            .then((response)=>{
                console.log(response.data);
                setMovies(response.data.movies) // Update the 'movies' state with the movies data from the API response
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    return (
        <div>
            <h3>Hello from read component</h3>
            <Movies myMovies={movies}/>
        </div>
    );
}

export default Read;