import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "components/Login";

import { ReduxWrapper } from "./setupTests";

describe("test Login.js", () => {
  let wrapper, wrongData, data, fields;
  beforeEach(() => {
    wrapper = render(
      <ReduxWrapper>
        <Login />
      </ReduxWrapper>
    );
    data = {
      email: "admin@test.net",
      password: "123",
    };
    wrongData = {
      email: "admin123@test.net",
      password: "312",
    };
    fields = {
      emailInput: screen.getByLabelText("login-email-input"),
      passwordInput: screen.getByLabelText("login-password-input"),
      loginBtn: screen.getByLabelText("login-btn"),
      loginForm: screen.getByLabelText("login-form"),
    };
  });

  it("should change email input when user types", async () => {
    userEvent.type(fields.emailInput, data.email);
    expect(fields.emailInput.value).toEqual(data.email);
  });

  it("should change password input when user types", async () => {
    const mockChange = jest.fn();
    fields.passwordInput.onChange = mockChange;
    userEvent.type(fields.passwordInput, data.password);
    expect(fields.passwordInput.onChange).toHaveBeenCalled();
    expect(fields.passwordInput.value).toEqual(data.password);
  });

  it("should renders error test when type wrong email", async () => {
    userEvent.type(fields.emailInput, wrongData.email);
    userEvent.type(fields.passwordInput, data.password);
    userEvent.click(fields.loginBtn);
    expect(screen.getByLabelText("login-email-error")).toBeInTheDocument();
  });

  it("should renders error test when type wrong password", async () => {
    userEvent.type(fields.emailInput, data.email);
    userEvent.type(fields.passwordInput, wrongData.password);
    userEvent.click(fields.loginBtn);
    expect(screen.getByLabelText("login-password-error")).toBeInTheDocument();
  });
});
