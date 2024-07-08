import { createSlice } from "@reduxjs/toolkit";


const initialState =[];
const userSlice =createSlice({
    name:'user',

    initialState,
    reducers:{
    addUser:(state, action) =>{
        state.push(action.payload)
    }, 
    edituser:(state, action ) =>{
        const {id, name, email}= action.payload;
        const existinguser = state.find(user => user.id === id )
        if (existinguser){
            existinguser.name=name;
            existinguser.email= email;
        }
    },
    deleteUsers:(state, action)=> {
        const {id} = action.payload;
        const existinguser = state.find(user => user.id === id );
        if (existinguser){
            return state.filter(user => user.id !==id);
        }
            return state.filter(user => user.id !==id)
    }
    }
})
export const {addUser, edituser, deleteUsers} = userSlice.actions;
export default userSlice.reducer