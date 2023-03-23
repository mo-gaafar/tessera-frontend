// import axios from 'axios';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

// function FacebookLoginButton() {
//     const responseFacebook = (response) => {
//         axios.post('/auth/facebook', { access_token: response.accessToken })
//           .then((res) => {
//             // This function will be called after the server handles the Facebook authentication
//             // You can use the response data to authenticate the user or store it in your application state
//             console.log(res.data);
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//         }
//     return(
//     <div>
//         <FacebookLogin
//         appId="177342965099550"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={responseFacebook}
//         render={(renderProps) => (
//           <svg onClick={renderProps.onClick} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#1877F2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2792 24.7233L28.8493 20.9515H25.2831V18.5038C25.2831 17.4719 25.7812 16.466 27.3786 16.466H29V13.2549C29 13.2549 27.5285 13 26.1217 13C23.1845 13 21.2648 14.8064 21.2648 18.0767V20.9515H18V24.7233H21.2648V33.8415C21.9195 33.9457 22.5905 34 23.274 34C23.9575 34 24.6285 33.9457 25.2831 33.8415V24.7233H28.2792Z" fill="white"></path></svg>

//         )}
//       />
//     </div>
//     );

//   }

// export default FacebookLoginButton;
