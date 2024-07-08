import { Link  } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../features/userSlice';
import classes from './assest/second.module.css'

import logo from '../images/logo.jpg'



const UserList = ()=>{ 
    const dispatch = useDispatch();
    const users = useSelector(store =>store.users);
   const handleremoveUser = (id) =>{
    dispatch(deleteUsers({id} ));

   }


    const renderCard=() =>users.map(user=>(
        <div className={classes.admin} key={(user.id)}>
           <div>
                <h3  className={classes.adminname}>{user.name}</h3>
                <span className={classes.adminmail} >{user.email}</span>
                </div>

<div  className={classes.fee}>
<Link to={`edit-user/${user.id}`}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>


</Link>

<div/>

    

<div >



<Link  onClick={() =>handleremoveUser(user.id)} className={classes.deleteUsers}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</Link>
</div>
</div>



            </div>
    

        
))

    return(
    <>
    <Link to={'/'}>
                <h1 className={classes.head}>
                <img className={classes.bloomzonlogo} src={logo} alt="background"></img> Bloom<span className={classes.span}>
                zon</span> International
                </h1>
                
                </Link>
             

       <h1 className={classes.head}>
       Bloomzon international Super Admin 
       </h1>
       <p className={classes.head}>LIST OF ADMINS</p>
     
        <div>
            <Link to="/AddUser">
           
        <button className={classes.btn}>
          ADD
         
               </button>
            </Link>
       
        <div className="grid gap-5">
         {users ? renderCard(): <p className="text-content , color:white">no User</p>}
        </div>
        
        </div>
        </>
    )}
    




export default UserList;