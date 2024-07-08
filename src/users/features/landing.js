import React from "react";
import { Link } from "react-router-dom";
import classes from './assest/landing.module.css'
import logo from '../images/logo.jpg';

function Landingpage() {
    return (
        <>
            <section className={classes.bg}>

                <Link to={'/'}>
                <h1 className={classes.head}>
                <img className={classes.bloomzonlogo} src={logo} alt="background"></img> Bloom<span className={classes.span}>
                zon</span> International
                </h1>
                
                </Link>
             
               
                <div className={classes.pagedetails}>
                    <h2>

                        
                    Welcome to Bloomzon International Admin Dashboard
                    </h2>
                    <p>
                    please take note: this website is strictly for Bloomzon international Admin workers.

                </p>
                
                <span>Please use the to link to be redirected back to the company's main website</span>
                <div/>

                <button className={classes.btn}> 
               
                    <Link to={'https://bloomzon.com/'}>
                    Bloomzon
                    </Link>
                    </button>

                </div>
                <h3 className={classes.officaluse}>
                    Offical use 
                </h3>

                <div className={classes.button}>
                <button className={classes.btn}> 
                    <Link to={'/adminform'}>

                        Admin
                    </Link>
                    </button>

                    <button className={classes.btn}> 
                    <Link to={'/loginsuperadin'}>

                        S.Admin
                    </Link>
                    </button>
                </div>

            </section>



        </>


    )
}
export default Landingpage;