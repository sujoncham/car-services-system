import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Login from './Components/SignUp/Login';
import Signup from './Components/SignUp/Signup';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
