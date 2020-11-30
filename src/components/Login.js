import { useDispatch } from "react-redux";
import { saveInforUser } from "store/ducks/home/actions";
import { useLoginForm } from "./loginHooks";

const Login = ({ handleChangeInput }) => {
  const dispatch = useDispatch();
  const { formData, formError, changeData, showError } = useLoginForm();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    changeData({ ...formData, [name]: value });
    handleChangeInput && handleChangeInput({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const errorState = {
      email: false,
      password: false,
    };
    errorState.email = !formData.email.trim().includes("admin@test.net");
    errorState.password = !formData.password.trim().includes("123");
    if (errorState.email || errorState.password) {
      showError(errorState);
      return;
    }
    dispatch(saveInforUser(formData));
  };

  return (
    <div className="container-sm p-4">
      <form aria-label="login-form" onSubmit={submit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            aria-label="login-email-input"
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control"
          />
          {formError.email && (
            <span aria-label="login-email-error">Account is not existed!</span>
          )}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            aria-label="login-password-input"
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
          />
          {formError.password && (
            <span aria-label="login-password-error">Password is wrong!</span>
          )}
        </div>
        <button
          aria-label="login-btn"
          className="btn btn-primary"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
