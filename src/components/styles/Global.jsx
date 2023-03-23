import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


:root{
  /* colors */
  --clr-dark:#39364f;
  --clr-blue:#3659e3;
}
${
  '' /* @font-face {
  font-family:'neue' ;
  src: url('../../../public/font/NeuePlak-Bold.ttf') format("ttf");
  font-weight: bold;
}
@font-face {
  font-family:'neue' ;
  src: url('../../../public/font/NeuePlak-Regular.ttf') format("ttf");
  font-weight: 400;
}
@font-face {
  font-family:'neue' ;
  src: url('../../../public/font/NeuePlak-SemiBold.ttf') format("ttf");
  font-weight: 600;
}
@font-face {
  font-family:'neue' ;
  src: url('../../../public/font/NeuePlak-Black.ttf') format("ttf");
  font-weight: 900;
} */
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
html {
  font-size: 62.5%;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: 'Roboto', sans-serif;
  ${'' /* font-family: 'neue plak'; */}
  font-size: 1.6rem;
  font-weight: 400;
  color:var(--clr-dark);
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
a {
  text-decoration: none;
  color: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
