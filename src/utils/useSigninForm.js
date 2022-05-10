import { useEffect, useState , createContext } from "react";
import { useHistory } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { userActions } from "../../src/reducers/userReducer";

const UserContext = createContext();

export default function usesigninForm(validateSignin) {
  const history = useHistory();
  const userDispatch = useDispatch();

  const [values, setValues] = useState({
    
    email: "",
    password: ""
  });
  const [login, setLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("18......" +e.target);
    setValues({
      ...values,
      [name]: value
    });
   

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateSignin(values));
    userDispatch(userActions.addCurrentUser(values));
    setIsSubmit(true);
    //history.push("/");
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
    
      history.push("/");
    
    }
  }, [errors]);


  return { handleChange, values, errors, handleSubmit };
}
