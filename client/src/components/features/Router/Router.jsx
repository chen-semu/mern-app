import "./Router.css";
import {Route, Routes} from "react-router-dom"
import Home from '../../pages/Home/Home'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import LogIn from "../../pages/LogIn/LogIn.jsx";
import SignUp from "../../pages/SignUp/SignUp.jsx";


function Router() {
  return (
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/Sign-Up' element={<SignUp/>}/>
      </Routes>
  );
};

export default Router;