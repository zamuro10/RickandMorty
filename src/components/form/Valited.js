
function validateInput(userData, setErrors) {
    const { email, password } = userData;
    const errors = {
      email: "",
      password: "",
    };
  
    // validamos el email
    if (!email) {
      errors.email = "Email vacio ";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors.email = "email invalido";
    }
  
    //validamos el password
    if (!password) {
      errors.password = "Password vacio.";
    } else if (!/\d/.test(password)) {
      errors.password = "Password debe contener al menos un numero";
    } else if (password.length < 6 || password.length > 10) {
      errors.password = "Password debe tener entre 6 y 10 caracters";
    }
  
    setErrors(errors);
  }
  
  export default validateInput;
  