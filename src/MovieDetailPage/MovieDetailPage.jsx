import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css"

function MovieDetailPage() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const location = useLocation();

    useEffect(() => {
        async function getData(){
            let imdbId = location.state.movieId
            await fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=793b59e5`)
            .then(response => response.json())
            .then((data) => {
                    setData(data)
                }) 
            } 
            getData()
    }, [])
    console.log(data)
    return (     
        <div className="detail">
            <div className="detail-content">
                <div style={{margin: '5px'}}>
                    <img src={data.Poster}></img>
                </div>
                <div>
                    <div>Title: {data.Title}</div>
                    <div>Year: {data.Year}</div>
                    <div>Runtime: {data.Runtime}</div>
                    <div>Genre: {data.Genre}</div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;