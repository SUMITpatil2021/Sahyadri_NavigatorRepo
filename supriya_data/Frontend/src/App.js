import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import TrekkingClub from './ClubComponent/TrekkingClub';
import AddTrekk from './ClubComponent/AddTrekk';
import Profile from './ClubComponent/ViewProfile';
import ViewProfile from './ClubComponent/ViewProfile';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import HomePage from './components/HomePage';
import Footer from './component2/Footer';

import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Trekkingclublist from './adminComponent/Trekkingclublist';
import Trekkerlist from './adminComponent/Trekkerlist';
import EditTrekker from './adminComponent/EditTrekker';
import EditTrekkingClub from './adminComponent/EditTrekkingClub';
import AdminDashboard from './adminComponent/AdminDashboard';
import TrekkerDashboard from './TrekkerComponet/TrekkerDashboard';
import ServerError from './component2/serverError';
import ClubRegistration from './ClubComponent/ClubRegistration';
import AddImage from './ClubComponent/AddImage';
import ComposeEmail from './TrekkerComponet/Email';
import LandingPage from './component2/LandingPage';


function App() {
  return (
    <div className="App">
        <Routes> 
    
         <Route path='/' element={<LandingPage/>}/>  
         <Route path='/Home' element={<HomePage/>}/>  
         <Route path='/Aboutus' element={<AboutUs/>}/>
         <Route path='/Contactus' element={<ContactUs/>}/>
         <Route path='/UserLogin' element={<UserLogin/>}/>

         <Route path='/UserRegistration' element={<UserRegistration/>}/>
         <Route path='/ClubRegistration' element={<ClubRegistration/>}/>
         <Route path='/Admin' element={<AdminDashboard/>}/>
         <Route path='/EditTrekkingClub' element={<EditTrekkingClub/>}/>

         <Route path='/TrekkingClub' element={<TrekkingClub/>}/>
         <Route path='/Trekker' element={<TrekkerDashboard/>}/>
         <Route path='/Enquiry' element={<ComposeEmail/>}/>

         <Route path='/AddTrekk' element={<AddTrekk/>}/>
         
         <Route path='/ViewProfile' element={<ViewProfile/>}/> 
         <Route path='/Trekkerlist' element={<Trekkerlist />} /> 
         <Route path='/Trekkingclublist' element={<Trekkingclublist/>}/>
         <Route path='/EditTrekker' element={<EditTrekker/>}/>
         <Route path='/EditTrekkingClub' element={<EditTrekkingClub/>}/>
         
         <Route path='/AddImage' element={<AddImage/>}/>

         <Route path='/serverError' element={<ServerError/>}/>

         <Route path='/Footer' element={<Footer/>}/>
          {/* <Route path='/*' element={<All/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
