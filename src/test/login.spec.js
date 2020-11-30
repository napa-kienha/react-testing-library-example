import React from "react";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import { act, renderHook } from "@testing-library/react-hooks";
import Login from "components/Login";
import { useLoginForm } from "components/loginHooks";

import { ReduxWrapper } from "./setupTests";

describe("test Login.js", () => {
  let wrapper, data, fields, onChange;
  beforeEach(() => {
    onChange = jest.fn();

    wrapper = render(
      <ReduxWrapper>
        <Login handleChangeInput={onChange} />
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

  it("should change email input when user types", async () => {
    userEvent.type(fields.emailInput, data.email);
    expect(fields.emailInput.value).toEqual(data.email);
  });

  it("should change password input when user types", async () => {
    userEvent.type(fields.passwordInput, data.password);
    expect(onChange).toHaveBeenCalled();
    expect(fields.passwordInput.value).toEqual(data.password);
  });

  it("should invoke onChange input when user types", async () => {
    userEvent.type(fields.emailInput, data.email);
    userEvent.type(fields.passwordInput, data.password);
    expect(onChange).toHaveBeenCalled();
  });

  it("should renders error test when type wrong email", async () => {
    userEvent.type(fields.emailInput, "wrong email");
    userEvent.type(fields.passwordInput, data.password);
    userEvent.click(fields.loginBtn);
    expect(screen.getByLabelText("login-email-error")).toBeInTheDocument();
  });

  it("should renders error test when type wrong password", async () => {
    userEvent.type(fields.emailInput, data.email);
    userEvent.type(fields.passwordInput, "wrong password");
    userEvent.click(fields.loginBtn);
    expect(screen.getByLabelText("login-password-error")).toBeInTheDocument();
  });
});

describe("test login hooks", () => {
  let data;
  beforeEach(() => {
    data = {
      email: "admin@test.net",
      password: "123",
    };
  });
  it("change data", () => {
    const { result } = renderHook(useLoginForm);

    act(() => {
      result.current.changeData(data);
    });

    expect(result.current.formData).toBe(data);
  });
});
