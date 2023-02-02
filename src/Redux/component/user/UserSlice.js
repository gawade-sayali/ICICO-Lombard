import { createSlice} from '@reduxjs/toolkit'

const UserSlice=createSlice({
    name:'user',
    initialState:{value:[]},
    reducers:{
        Adduser(state,action){
            // console.log(action)
            state.value.push(action.payload)
        },
        DeletePost(state,action){
        //    alert(action.payload.id)
           state.value=state.value.filter((item)=> item.id!==action.payload.id)
        },
        EditPost(state,action){
           state.value.map((item)=>{
              if(item.id==action.payload.id){
                console.log(item.id)
                 item.first=action.payload.first
                 item.last=action.payload.last
                 item.handle=action.payload.handle
              }
           })
        }
}
})
export const {Adduser,DeletePost,EditPost} = UserSlice.actions
export default UserSlice.reducer