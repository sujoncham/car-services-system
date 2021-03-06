import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddService from "./Components/AddService/AddService";
import ManageServices from "./Components/AddService/ManageServices";
import CheckOut from "./Components/CheckOut/CheckOut";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Login from "./Components/SignUp/Login";
import RequireAuth from "./Components/SignUp/RequireAuth";
import SignupUser from "./Components/SignUp/SignupUser";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Page404 from "./Pages/Page404";
import Services from "./Pages/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/services/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignupUser></SignupUser>}></Route>
        <Route path="/checkout/:serviceId" element={ <RequireAuth> <CheckOut></CheckOut> </RequireAuth> } ></Route>
        <Route path="/addservice" element={ <RequireAuth><AddService></AddService></RequireAuth> }></Route>
        <Route path="/manageservice" element={<RequireAuth> <ManageServices></ManageServices> </RequireAuth> } ></Route>
        <Route path="/orders" element={<RequireAuth> <Order></Order> </RequireAuth> } ></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
