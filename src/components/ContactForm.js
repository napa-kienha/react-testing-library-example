import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCountries } from "store/ducks/home/actions";

const data = ["Select 1", "Select 2", "Select 3", "Select 4"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    radio: 1,
    select: data[0],
    message: "",
  });
  const dispatch = useDispatch();
  const countries = useSelector(({ home }) => home.countries);

  useEffect(() => {
    dispatch(fetchAllCountries());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log(countries);
  }, [countries]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormData({ ...formData, [name]: name === "radio" ? value - 0 : value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-sm p-4" aria-label="contact-form">
      <h1>Submit form</h1>
      <form onSubmit={submit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label text-left">
            Email address:
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label text-left">
            Choose radio:
          </label>
          <div className="col-sm-10 d-flex flex-row">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value={1}
                name="radio"
                onChange={handleChange}
                checked={formData.radio === 1}
              />
              <label className="form-check-label">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                value={2}
                onChange={handleChange}
                checked={formData.radio === 2}
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                value={3}
                onChange={handleChange}
                checked={formData.radio === 3}
              />
              <label className="form-check-label">3</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label text-left">Select:</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              {data.map((el, index) => (
                <option key={index} value={el.id}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label text-left">Message</label>
          <div className="col-sm-10">
            <textarea
              placeholder="Required example textarea"
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
