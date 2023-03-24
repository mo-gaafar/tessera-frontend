import React from 'react'
import GlobalStyles from './components/styles/global';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './nav2';

// import Navbar from './navbar';


function App() {
  return (
    
    <>

      <BrowserRouter>
      <GlobalStyles />

      <Navbar />
      
      <Routes >


          <Route />


      </Routes>


      </BrowserRouter>
      

    </>
  );
}

export default App;
