import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

function GoogleLoginButton() {
  const responseGoogle = response => {
    axios
      .post('/auth/google', { access_token: response.accessToken })
      .then(res => {
        // This function will be called after the server handles the Google authentication
        // You can use the response data to authenticate the user or store it in your application state
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <GoogleLogin
      clientId="541007032768-386l8rpv5khjitht4pqh8rfg1vu1bf2e.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLoginButton;
