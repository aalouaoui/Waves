export const validate = (el, formData = []) => {
  let error = [true, ""];
  if (el.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(el.value);
    const message = `${!valid ? "Valid email address is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (el.validation.confirm) {
    const valid = el.value.trim() === formData[el.validation.confirm].value;
    const message = `${!valid ? "Passwords must match" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (el.validation.required) {
    const valid = el.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

export const update = (el, formData, formName) => {
  const newFormData = {
    ...formData
  };
  const newElement = {
    ...newFormData[el.id]
  };
  newElement.value = el.e.target.value;
  if (el.blur) {
    let validData = validate(newElement, formData);
    newElement.valid = validData[0];
    newElement.valdationMessage = validData[1];
  }
  newElement.touched = el.blur;
  newFormData[el.id] = newElement;
  return newFormData;
};

export const generateData = (formData, formName) => {
  let dataToSubmit = {};
  for (let key in formData) {
    if (key !== "confirmPassword") {
      dataToSubmit[key] = formData[key].value;
    }
  }
  return dataToSubmit;
};

export const isFormValid = (formData, formName) => {
  let formIsValid = true;
  for (let key in formData) {
    formIsValid = formData[key].valid && formIsValid;
  }
  return formIsValid;
};
