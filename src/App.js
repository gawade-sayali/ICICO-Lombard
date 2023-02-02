import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from './Redux/component/Navbar';
import Home from './Redux/component/Home';
import AddUser from './Redux/component/user/AddUser';
import EditUser from './Redux/component/user/EditUser';
import Addemp from './Redux/component/Employee/Addemp';
import Listemp from './Redux/component/Employee/Listemp';
import Editemp from './Redux/component/Employee/Editemp';

function App() {
  return (
    <>
    
    <BrowserRouter>
       <Navbar/>
       <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/AddUser' element={<AddUser/>}/>
            <Route exact path='/Edituser/:id' element={<EditUser/>}/>
            <Route exact path='/Addemp' element={<Addemp/>}/>
            <Route exact path='/Listemp' element={<Listemp/>}/>
            <Route exact path='/Editemp/:id' element={<Editemp/>}/>
       </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
