import { Route, Routes } from "react-router-dom";
import  HomeView from "../pages/home";


const Router =()=>{

    return (
        
        <Routes>
         <Route path="/" element={< HomeView/>}></Route>
          
        </Routes>
      
    )
}

export default Router;