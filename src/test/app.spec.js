import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";

import { ReduxWrapper } from "./setupTests";

describe("test App.js", () => {
  let wrapper, data, fields;
  beforeEach(() => {
    wrapper = render(
      <ReduxWrapper>
        <App />
      </ReduxWrapper>
    );
    data = {
      email: "admin@test.net",
      password: "123",
    };
    fields = {
      emailInput: screen.getByLabelText("login-email-input"),
      passwordInput: screen.getByLabelText("login-password-input"),
      loginBtn: screen.getByLabelText("login-btn"),
      loginForm: screen.getByLabelText("login-form"),
    };
  });

  it("should renders login form", () => {
    expect(fields.loginForm).toBeInTheDocument();
  });

  it("should renders contact form after login", async () => {
    userEvent.type(fields.emailInput, data.email);
    userEvent.type(fields.passwordInput, data.password);
    userEvent.click(fields.loginBtn);
    expect(screen.getByLabelText("contact-form")).toBeInTheDocument();
  });
});
