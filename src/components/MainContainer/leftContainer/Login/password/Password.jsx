import { StyledPassword } from "./Password.styled";

export default function Password() {
  return (
    <StyledPassword>
      <div class="passworddiv">
        <label for="pass">Password</label>
        <input type="password" id="pwd" name="pwd"></input>
      </div>
    </StyledPassword>
  );
}
