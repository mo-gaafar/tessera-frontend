import React from "react"
import { fireEvent, render } from '@testing-library/react-dom';
import { describe, it, expect } from 'vitest';
import SignUp from "./sign-up";

describe('sign-up', () => {
  it("correct email entered", ()=>{
    const {getByTestId} = render(<SignUp/>);
    const emailvalue = getByTestId("email").value
    expect(emailvalue).toEqual('test@email.com')
  });
  it('when pressing the continue button with empty email error will appear ', () => {
    const {getAllByRole,getByText} = render(<SignUp />);
    const continueButton = getAllByRole("button",{name:"Continue"})[0]
    const labels = getByText("Field required").textContent
    fireEvent.click(continueButton)
    expect(labels).toEqual(" Field required")
  });

})