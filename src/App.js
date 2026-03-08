
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMovies from './Components/NavMovies';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import Error from './Components/Error';
import UpdateProfil from './Components/UpdateProfil';
import ListUsers from './Components/ListUsers';
import ListMovies from './Components/ListMovies';
import EditMovie from './Components/EditMovie';
import AddMovie from './Components/AddMovie';
import MoviePage from './Components/MoviePage';
import EditComment from './Components/EditComment';
import MyComments from './Components/MyComments';
import MyMovies from './Components/MyMovies';

function App() {
  return (
    <div >
      <NavMovies/>
      <Error/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/> 
        <Route path='/UpdateProfil' element={<PrivateRoute><UpdateProfil/></PrivateRoute>}/> 
        <Route path='/ListUsers' element={<ListUsers/>}/> 
        <Route path='/ListMovies' element={<ListMovies/>}/> 
        <Route path='/EditMovie/:id' element={<EditMovie/>}/> 
        <Route path='/AddMovie' element={<AddMovie/>}/> 
        <Route path='/MoviePage/:id' element={<PrivateRoute><MoviePage/></PrivateRoute>}/> 
        <Route path='/EditComment/:id' element={<EditComment/>}/>
        <Route path='/MyComments' element={<MyComments/>}/>
        <Route path='/MyMovies' element={<MyMovies/>}/>
      </Routes>
    </div>
  );
}

export default App;
