import React, { useState } from "react";
import TextField from "./textname";
import { useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux"
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';
import logo from '../images/logo.jpg';
import classes from './assest/Aminlogin.module.css';
import { Link } from "react-router-dom";
const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    id: uuidv4(),
    name: '',
    email: '',
  });

  const Handleaddadmin = () => {
    setvalues({ name: '', email: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))

    navigate('/admin');
  };
  return (
    <>
     <Link to={'/'}>
                <h1 className={classes.head}>
                <img className={classes.bloomzonlogo} src={logo} alt="background"></img> Bloom<span className={classes.span}>
                zon</span> International
                </h1>
                
                </Link>
             
      <div className={classes.loginbox}>
      <h2>Add Admin</h2>
        <label className={classes.userbox} >Name</label>

        <TextField 
          Lable="Name"
          value={values.name}
          inputprops={{
            type: "type", placeholder: "Jhon doh ",
          }}

          onChange={(e) => setvalues({ ...values, name: e.target.value })}
          id="name" name="name" required
        />
        <br />
        <label className={classes.userbox}>Email</label>


        <TextField className={classes.userbox} 
          Lable="Email"
          value={values.email}
          inputProps={{ type: "email", placeholder: "Jhon@gmail.com" }}

          onChange={(e) => setvalues({ ...values, email: e.target.value })}
          id="email" name="email" required />

        <button  onClick={Handleaddadmin}className={classes.btn}>
          Submit

        </button>


      </div>

    </>
  );
};
export default AddUser;
