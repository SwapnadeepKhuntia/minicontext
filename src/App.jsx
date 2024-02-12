import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './controler/login';
import Profile from './controler/profile';


function App() {

  return(
    <>
    <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
