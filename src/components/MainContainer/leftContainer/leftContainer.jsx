import { LeftStyled } from "./leftContainer.styled";
import Login from "./Login/login";
export default function LeftContainer() {
  return (
    <LeftStyled>
      <div id="blankleft" />
      <Login />
      <div id="blankright" />
    </LeftStyled>
  );
}
