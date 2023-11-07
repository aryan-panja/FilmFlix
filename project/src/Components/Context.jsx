// context is just like ware house
// ->WAREHOUSE - we need warehouse to store the data
// ->PROVIDER - we need provider to provide the data
// ->CONSUMER - we need consumer to consume the data => we can use useContext() hook to consume the data

import React, { useEffect, useState } from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=df544f63`;

const AppContext = React.createContext();

//Making of provider
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("batman");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setMovie(data.Search);
                setIsLoading(false);
            }
            else {
                setError({ show: true, msg: data.Error });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 800);

        return () => clearTimeout(timerOut);

    }, [query]);

    return <AppContext.Provider value={{ isLoading, movie, error, query, setQuery, error }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };