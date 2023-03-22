import GlobalStyles from './components/styles/global';
import SignUp from './components/sign-up'
import Footer from './components/footer'
import React from 'react';
import { useFormik } from 'formik'

function App() {
  return (
    <div>
      <GlobalStyles />
      <SignUp />
      {/* <Footer />  */}
    </div>
    
  );
}

export default App;
