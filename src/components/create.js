import { useState } from "react";
 
const Create = () => {
    // useState hook to manage the title of the movie being created
    const [title, setTitle] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevents the default form submission behavior
        console.log(title); // Logs the current title to the console
    }

    return(
        <div>
            <h3>Hello from create component</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}></input>
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;