import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

export default function useForm(validate) {
  const history = useHistory();
 
//const {updateLoginStatus} = useContext(AuthContext);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const handleLogOutClick = () => {
  //   updateLoginStatus(false);
  // }

  // const renderLogOutClick = () => {
  //   <Link
  //     onClick={handleLogOutClick}
  //     to="/"
  //     className="header__sub-container__nav-wrapper__login__link"
  //   >
  //     Signout
  //   </Link>
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
   
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      history.push("/signin");
    }
  }, [errors]);

  return { handleChange, values, errors, handleSubmit, 
   // isLoggedIn: TokenService.hasAuthToken(),loggedOutRender 
  };
}
