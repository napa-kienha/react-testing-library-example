import userEvent from "@testing-library/user-event";
import App from "App";
import { render, screen } from "./test-utils";
import { ReduxWrapper } from "./setupTests";

import { call, put } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";
import { fetchData } from "store/ducks/home/sagas";
import { saveCountries } from "store/ducks/home/actions";

import Request from "services/request";
const request = new Request();

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

//-----------------------Test redux-----------------------//

describe("test login redux", () => {
  let data;
  beforeEach(() => {
    data = {
      email: "admin@test.net",
      password: "123",
    };
  });
  it("test dispatch login form", () => {
    render(<App />, {
      initialState: { home: { inforUser: data } },
    });
    expect(screen.getByLabelText("contact-form")).toBeInTheDocument();
  });
});

//-----------------------Test sagas-----------------------//

//Define mock api
const url = "https://restcountries.eu/rest/v2/all";

describe("test common redux saga", () => {
  const it = sagaHelper(fetchData());

  beforeEach(() => {});

  it("should have called the mock API first", async (result) => {
    expect(result).toEqual(call(request.fetchData, url));
    return ["aaa", "bbb"];
  });

  it("and then trigger an action", (result) => {
    expect(result).toEqual(put(saveCountries()));
  });

  it("and then nothing", (result) => {
    expect(result).toBeUndefined();
  });
});
