import logo from './logo.svg';
import './App.css';
import AdminDashboard from './components/adminComponents/AdminDashboard';
import Header from './components/Header';
import HomePage from './components/HomePage';
import  Footer  from './components/Footer';
import Trekkerlist from './components/adminComponents/Trekkerlist';
import { Route, Router, Routes } from 'react-router-dom';
import Trekkingclublist from './components/adminComponents/Trekkingclublist';
import EditTrekker from './components/EditTrekker';
import EditTrekkingClub from './components/EditTrekkingClub';
// import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import LoginUser from './components/UserLogin';
import UserLogin from './components/UserLogin';
import AddTrekk from './components/trekkingclubcomponents/AddTrekk';
import AddImage from './components/trekkingclubcomponents/AddImage';
import TrekkerDashboard from './components/trekkerComponents/TrekkerDashboard';
import ClubRegistration from './components/ClubRegistration';
import TrekkingClub from './components/trekkingclubcomponents/TrekkingClub';
import AddTrekkWithImage from './components/trekkingclubcomponents/AddTrekkWithImage';
import AddGuide from './components/trekkingclubcomponents/AddGuide';
import UpdateTrekker from './components/trekkerComponents/UpdateTrekker';
import ViewProfile from './components/trekkingclubcomponents/ViewProfile';
import LandingPage from './components/LandingPage';
import ViewMyTrekk from './components/trekkerComponents/ViewMyTrekk';
import ViewEditTrekker from './components/trekkerComponents/ViewEditTrekker';
import Enquiry from './components/trekkerComponents/Email';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <AdminDashboard /> */}
      {/* <Footer/> */}
      {/* <Trekkerlist /> */}
{/*  
 <Header/>
 <main>
  <HomePage/>
 </main>
 <Footer/> */}

       <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/addtrekk' element={<AddTrekk/>}/>
        <Route path='/AddImage' element={<AddImage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
       <Route path='/Trekkerlist' element={<Trekkerlist />} /> 
       <Route path='/Trekkingclublist' element={<Trekkingclublist />} /> 
       <Route path='/EditTrekker/:userid' element={<EditTrekker/>} /> 
       <Route path='/EditTrekkingClub' element={<EditTrekkingClub/>}/>
       {/* <Route path='/Login' element={<Login />}/> */}
       {/* <Route path='/UserLogin' element={<UserLogin/>}/> */}
       <Route path='/UserLogin' element={<UserLogin/>}/>
       <Route path='/admin' element={<AdminDashboard/>}></Route>
       <Route path='/UserRegistration' element={<UserRegistration/>}/>
       <Route path='/clubregister' element={<ClubRegistration/>}></Route>
       
       <Route path='/Trekker' element={<TrekkerDashboard/>}></Route>
       <Route path='/ViewMyTrekk' element={<ViewMyTrekk/>}/>
       <Route path='/ViewEditTrekker' element={<ViewEditTrekker/>}/>
       <Route path='/Enquiry' element={<Enquiry/>}/>


       <Route path='/updatetrekker/:username' element={<UpdateTrekker/>}/>
      <Route path="/trekkingclub" element={<TrekkingClub/>}></Route>
      <Route path='/trekkingclubprofile' element={<ViewProfile/>}/>
      <Route path='/addtrek' element={<AddTrekkWithImage/>}></Route>
      <Route  path='/addguide' element={<AddGuide/>}></Route>
      <Route path='/serverError' element={<ErrorPage/>}/>
       </Routes>
    
    </div>
  );
}

export default App;
