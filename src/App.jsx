import {  } from 'react'
import './App.css'
import MoviesStartPage from './MoviesStartPage/MoviesStartPage'
import { Route, Routes } from 'react-router-dom'
import MovieDetailPage from './MovieDetailPage/MovieDetailPage'
function App() {

  return (
    <div className="background">
        <div class="navigation-bar" id="navigation">
            <ul>
                <li>
                    <a>Movies!</a>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path="/">
                <Route path=":id" element={<MovieDetailPage />} />
                <Route path="" element={<MoviesStartPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
