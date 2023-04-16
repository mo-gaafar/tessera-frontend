export default function NavbarLoggedIn(props) {
  return (
    <>
      <nav className="logged__nav">
        <img src="/images/LogoFullTextTicketLarge.png" alt="" />
        <ul className="logged__nav__list">
          <li className="logged__nav__list__create">
            <svg
              id="plus-chunky_svg__eds-icon--plus-chunky_svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <path
                id="plus-chunky_svg__eds-icon--plus-chunky_base"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"
                fill="blue"
              ></path>
            </svg>
            Create an Event
          </li>
          <li>
            <span>
              <svg
                className="user__svg"
                id="user-chunky_svg__eds-icon--user-chunky_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
              >
                <path
                  fill="#4b4d63"
                  id="user-chunky_svg__eds-icon--user-chunky_base"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"
                ></path>
                <path
                  fill="#4b4d63"
                  id="user-chunky_svg__eds-icon--user-chunky_circle"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"
                ></path>
              </svg>
            </span>
            {props.email}

            <svg
              style={{ width: '2rem' }}
              id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <path
                fill="#4b4d63"
                id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
              ></path>
            </svg>

            <div className="menu">
              <ul>
                <li>Browse Events</li>
                <li>Manage my Events</li>
                <li>Log out</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <picture className="imageDiv">
        <source
          media="(min-width: 40em)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/248d7e11d9885236625a1b207adf62c6-4_tablet_1067x470.jpg"
        />

        <source
          media="(min-width: 60em)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/83079b4f5dd9305720cddfba5b614445-4_web_1919x543.jpg"
        />

        <img
          src="https://cdn.evbstatic.com/s3-build/fe/build/images/542fec493f093cb39b6e1610cad9ff9a-4_mobile_659x494.jpg"
          alt="Homepage header"
        />
      </picture>
    </>
  );
}
