import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './component/header/Header.jsx'
import Aboutus from './component/header/aboutus/Aboutus.jsx';
import Dashbord from './component/header/dashbord/Dashbord.jsx';
import Slider from './component/header/dashbord/Slider.jsx';
import Footerone from './component/header/Footer1/Footerone.jsx';
import Productdetail from './component/header/productdetail/Productdetail.jsx';
import Addtocard from './component/header/addtocart/Addtocard.jsx';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   
    <Routes>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/' element={<Dashbord/>}/>
      <Route path='/Slider' element={<Slider/>}/>
      <Route path='/Addtocard' element={<Addtocard/>}/>
      <Route path='/productdetail/:id' element={<Productdetail/>}/>
    </Routes>

    <Footerone/>
    </BrowserRouter>
   </>
  );
}

export default App;
