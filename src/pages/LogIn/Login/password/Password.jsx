import { StyledPassword } from './Password.styled';
import { useState } from 'react';

export default function Password() {
  const [pass, setPass] = useState('');
  return (
    <StyledPassword>
      <div class="passworddiv">
        <label for="pass">Password</label>
        <input
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          id="pwd"
          name="pwd"
        ></input>
      </div>
    </StyledPassword>
  );
}
