import { StyledEmail } from "./Email.styled";

export default function Email() {
  return (
    <StyledEmail>
      <div class="full-input">
        <label for="email">Email address</label>
        <input type="text" name="email"></input>
      </div>
    </StyledEmail>
  );
}
