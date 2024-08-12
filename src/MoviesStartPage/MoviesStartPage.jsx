import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import "./style.css" 

function MoviesStartPage() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [numberOfDisplayedMovies, setNumberOfDisyplayedMovies] = useState(6)
    const [allDataIsShown, setAllDataIsShown] = useState(false)

    useEffect(()=>{
        async function getData(){
            await fetch("http://www.omdbapi.com/?s=guardian&apikey=793b59e5")
            .then(response => response.json())
            .then((data) => {
                setData(data)
            }) 
            .then(setLoaded(true))
        } 
        getData()
    }, [])

    if(!loaded || data.Search === undefined){
        return(<div></div>)
    } else {
        console.log(data)
        return( 
            <div>
                <div className="movies">
                    {data.Search.slice(0,numberOfDisplayedMovies).map(object => {
                        return <MovieItem 
                            picture={object.Poster}              
                            title={object.Title}
                            year={object.Year}
                            movieId={object.imdbID}
                        />
                    })}
                </div>
                {
                    allDataIsShown ? <></>
                    : <div className="point-container">...</div>
                }
                <div className="button-container">
                    <button className="btn" onClick={()=>{
                        setNumberOfDisyplayedMovies(numberOfDisplayedMovies + 3)
                        if(data.Search.length < numberOfDisplayedMovies) setAllDataIsShown(true)
                    }}>Show More!</button>
                </div>
            </div>
        );
    }
}

export default MoviesStartPage;