import React from 'react';
import { Wrapper } from './styles/Password.Styled.jsx';
import { PwdLabel } from './styles/Password.Styled.jsx';
import { PasswordStrenghP } from './styles/Password.Styled';
import { PwdProgress } from './styles/Password.Styled';

export default function PasswordChecker(props) {
  const pwdValidate = props.password;
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ['[A-Z]', '[a-z]', '[0-9]', '\\W'];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(pwdValidate)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: '',
        };
      case 1:
        return {
          strength: 1,
          val: 'very weak',
        };
      case 2:
        return {
          strength: 2,
          val: 'weak',
        };
      case 3:
        return {
          strength: 3,
          val: 'moderate',
        };
      case 4:
        return {
          strength: 4,
          val: 'strong',
        };

      default:
        return null;
    }
  };
  {
    props.actions(initPwdChecker().val);
  }
  let colorCondition = false;
  if (initPwdChecker().val === 'moderate') {
    colorCondition = 'moderate';
  } else if (initPwdChecker().val === 'strong') {
    colorCondition = 'strong';
  }

  return (
    <>
      <Wrapper>
        <PwdProgress
          inputColor={
            colorCondition === 'strong'
              ? 'green'
              : colorCondition === 'moderate'
              ? 'orange'
              : 'red'
          }
          className={`pwd-checker-bar strength-${initPwdChecker().val}`}
          value={initPwdChecker().strength}
          max="4"
        />
        <br />
        <PwdLabel>
          {props.password && (
            <div>
              <p className={`label strength-${initPwdChecker().val}`}>
                {props.showStrength != null ? (
                  ''
                ) : (
                  <PasswordStrenghP>
                    Your Password
                    <strong> is {initPwdChecker().val} </strong>
                  </PasswordStrenghP>
                )}
              </p>
            </div>
          )}
        </PwdLabel>
      </Wrapper>
    </>
  );
}
