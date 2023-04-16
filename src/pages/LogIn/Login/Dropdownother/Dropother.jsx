import { DropSt } from './Drop.Styled';

import { FacebookProvider, LoginButton, useLogin } from 'react-facebook';

export default function Dropother() {
  async function handleSuccess(response) {
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

    // console.log(await responseBackend.json());
  }

  function handleError(error) {
    console.log(error);
  }
  return (
    <DropSt>
      <button>
        Other login methods
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="downarrow bi bi-arrow-down-short"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="uparrow bi bi-arrow-up-short"
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
        <FacebookProvider appId="664174802386073">
          <LoginButton
            id="facebook"
            scope="public_profile,email"
            onError={handleError}
            onSuccess={handleSuccess}
          ></LoginButton>
        </FacebookProvider>
      </button>
    </DropSt>
  );
}
