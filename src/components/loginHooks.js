import { useState } from "react";

export function useLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: false,
    password: false,
  });
  const changeData = (data) => {
    setFormData(data);
  };
  const showError = (errorForm) => {
    setFormError(errorForm);
  };
  return { formData, formError, changeData, showError };
}
