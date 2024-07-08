
import { Route,Routes } from 'react-router-dom';
import ClippedDrawer  from './sidebar'
import AddUser from './users/features/Addusers'
import Edituser from './users/features/Edituser';
import Landingpage from './users/features/landing';
import Adminloginform from './users/features/Loginadmin'
import UserList from './users/features/userlist';
import Loginsuperadm from './users/features/loginsuperAdmin'



function App() {
  return (
    <div >
        

      <Routes>
      <Route path='/' element={<Landingpage/>}/>
        <Route path='/admin' element={<UserList/>}/>
        <Route path='/userform' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<Edituser/>}/>
        <Route path='/dashboard' element={< ClippedDrawer />}/>
        <Route path='/adminform' element={< Adminloginform />}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/loginsuperadin' element={<Loginsuperadm/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
