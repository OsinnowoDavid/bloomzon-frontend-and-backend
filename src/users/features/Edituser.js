import React from "react";
import TextField from "./textname";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { edituser } from "./userSlice";
import logo from '../images/logo.jpg'
import classes from './assest/Aminlogin.module.css';
import { Link } from "react-router-dom";
const Edituser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existinguser = users.filter(user => user.id === params.id);
  const { name, email } = existinguser[0]
  const [values, setvalues] = useState({
    name,
    email
  });

  const Handleeditaddadmin = () => {
    setvalues({ name: "", email: "" });
    dispatch(edituser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    navigate("/");
  }
  return (
    <>

<Link to={'/'}>
                <h1 className={classes.head}>
                <img className={classes.bloomzonlogo} src={logo} alt="background"></img> Bloom<span className={classes.span}>
                zon</span> International
                </h1>
                
                </Link>
             
    <div >

      <TextField
        Lable="name"
        inputprops={{
          type: "type",

          placeholder: "Jhon doh ",
        }}
        value={values.name}
        onChange={(e) => setvalues({ ...values, name: e.target.value })}
      />
      <TextField
        Lable="email"
        inputprops={{ type: "mail", placeholder: "Jhon@gmail.com    " }}
        value={values.email}
        onChange={(e) => setvalues({ ...values, email: e.target.value })}
      />
      <button onClick={Handleeditaddadmin}>Edit</button>
    </div>
    </>
  
  );


};
export default Edituser;
