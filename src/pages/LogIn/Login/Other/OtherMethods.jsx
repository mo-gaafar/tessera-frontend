import { OtherSt } from './OtherMethods.styled';
import { FacebookProvider, LoginButton, useLogin } from 'react-facebook';

import IconButton from '@mui/material/IconButton';
export default function Other() {
  async function handleSuccess(response) {
    localStorage.removeItem('authEmail');
    localStorage.removeItem('email');

    const facebookResponse = await fetch(
      `https://graph.facebook.com/v12.0/me?fields=name,email&access_token=${response.authResponse.accessToken}`
    );

    const data = await facebookResponse.json();

    const [firstname, lastname] = data.name.split(' ');
    const email = data.email;
    const id = data.id;

    const responseBackend = await fetch(
      'https://www.tessera.social/api/auth/facebook/app',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          id,
        }),
      }
    );
    const json = responseBackend.json();
    localStorage.setItem('authEmail', email);
    localStorage.setItem('token', json.token);
  }

  function handleError(error) {
    console.log(error);
  }
  return (
    <OtherSt>
      <label htmlFor="other">Other login methods</label>

      <div className="logos">
        <FacebookProvider appId="664174802386073">
          <LoginButton
            id="facebook"
            scope="public_profile,email"
            onError={handleError}
            onSuccess={handleSuccess}
          ></LoginButton>
        </FacebookProvider>
      </div>
    </OtherSt>
  );
}
