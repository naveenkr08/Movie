import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s="titanic`

const AppProvider = ({ children }) =>{
const [isLoading, setIsLoading] = useState(true);
const [movie, setmovie] = useState([])
const [isError, setIsError] = useState({show:"false", msg:""})
const [query, setQuery] = useState("titanic")

    const getMovies = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
           if(data.Response === "True"){
            setIsLoading(false);
            setmovie(data.Search)
           }
        }catch(error){
           setIsError({
            show:"true",
            msg:"Error"
           })
        }
    }


    useEffect(() => {
    getMovies(`${API_URL}&s=${query}`)
    }, [query])
    



    return <AppContext.Provider value={{isLoading , isError , movie , query, setQuery}}>{children}</AppContext.Provider>
}

//global custom

const useGlobalContext = ()=>{
      return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}; 