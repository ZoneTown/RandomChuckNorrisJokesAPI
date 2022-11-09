import React, {useState, useEffect} from 'react';
import './App.css';

// Functional component is App
export default function App() {
    const [jokes, setJokes] = useState([]);
    // fetchJoke -- arrow function
    const fetchJoke = async () => {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random"
        );
        const data= await response.json();
        setJokes(data);
    };// End of fetchJoke
    // Hook useEffect used to fetch Api
    useEffect(() => {
        fetchJoke();
    },[]);

    return(
        <div className="App">
            <p>{jokes.value}</p>
            <button onClick={fetchJoke}>Get new joke</button>
        </div>
    )
}