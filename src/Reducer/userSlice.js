import {createSlice} from '@reduxjs/toolkit'
import {userList} from '../assets/Data.js'


 const userSlice =  createSlice({
  name:"users",
  initialState:userList,
  reducers:{
    addUser:(state,action)=>{
    console.log('action',action)
        state.push(action.payload)
    } ,
    updateUser:(state, action) =>{
        // state.push(action.payload) 
        debugger
        console.log(state.users)
        const {id, username, email, contact} = action.payload
        const u_id = state.find(user=>user.id ==     id)
        if(u_id){
            u_id.username= username
            u_id.email= email
            u_id.contact= contact
        }
    },
    deleteUser:(state, action)=>{
        debugger
        const {id} = action.payload
        const u_id = state.find(user=>user.id === id)
        if(u_id){
            return state.filter(f=> f.id !==id)
        }
    }              
    }
  })
  export const {addUser} =userSlice.actions
  export const {updateUser} =userSlice.actions
  export const {deleteUser} =userSlice.actions


export default userSlice.reducer