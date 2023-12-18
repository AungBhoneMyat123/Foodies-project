import './index.css'
import Meals from "./components/Meals.jsx";
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Search from "./components/Search.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<Meals/>}></Route>
            <Route path={'/search/:name'} element={<Search/>}></Route>
            <Route path={'/detail/:id'} element={<DetailPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App
