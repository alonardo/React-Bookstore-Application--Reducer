import './App.css';
import NavBar from './components/NavBar';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import MyBook from './components/MyBooks';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/Register';
import Allbooks from './components/AllBooks';
import WishList from './components/WishList';
import DarkModeSwitch from './components/DarkModeSwitch';
import BookSearch from './forms/BookSearch';
import {Route, Router, Routes} from 'react-router-dom';
import Box from '@mui/material/Box';
import Login from "./views/Login";
import BookSearchView from "./views/FindBook";
import Register from "./views/Register"


const HomePage = ()=>(<h1>Welcome To Browsers!</h1>)

function App() {
  return (
    <>
    <NavBar/>

      <Box sx={{minHeight:'90vh'}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/getbooks' element={<BookSearchView/>}/>
        </Routes>
      </Box> 

    
    <SimpleBottomNavigation/>
    </>
  );
}

{/* <Route path="/allbooks" element={<Allbooks/>}/> */}
{/* <RegisterForm/> */}
{/* <LoginForm/> */}
{/* <BookSearch/> */}
{/* <AllBooks/> */}
{/* <WishList/>
<MyBook/> */}


export default App;
