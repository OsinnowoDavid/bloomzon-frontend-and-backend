import classes from './assest/Aminlogin.module.css';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
 function  Loginsuperadm () {
    return(
      <>

<section className={classes.bg}> 
<Link to={'/'}>
                <h1 className={classes.head}>
                <img className={classes.bloomzonlogo} src={logo} alt="background"></img> Bloom<span className={classes.span}>
                zon</span> International
                </h1>
                
                </Link>
             
      
      <div className={classes.loginbox}>
        <h2>Login as Bloomzon Super Adim</h2>
        <form>
          <div className={classes.userbox}>
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div className={classes.userbox}>
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <Link to="/admin">
          <button className={classes.btn}>
          Submit
         
               </button>
               </Link>
        </form>
      </div>
    
      </section>

      </>
    
    )

   
 
}

export default Loginsuperadm ;