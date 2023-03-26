import { StyledEmail } from "./Email.styled";
import { useState } from "react";
export default function Email() {
  const [email, setEmail] = useState("");
  return (
    <StyledEmail>
      <div class="full-input">
        <label for="email">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        ></input>
      </div>
    </StyledEmail>
  );
}
