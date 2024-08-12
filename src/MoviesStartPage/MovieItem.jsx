import { useEffect, useState } from "react";
import "./style.css"
import { useNavigate} from 'react-router-dom'; 

function MovieItem(props) {
    const navigate = useNavigate()
    const [movieId, setMovieId] = useState(props.movieId)

    const navigateToDetailPage = () => {
        navigate(movieId, {
            state: {
                movieId: props.movieId
            }
        }); 
    }

    return ( 
        <div className="item">
            <div className="item-content">
                <div>
                    <img src={props.picture} onClick={navigateToDetailPage}></img>
                </div>
                <div className="text-content">
                    <div>Title: {props.title}</div>
                    <div>Year: {props.year}</div>
                </div>
                
            </div>
        </div>
     );
}

export default MovieItem;