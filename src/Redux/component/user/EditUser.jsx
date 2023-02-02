import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { EditPost } from "./UserSlice";

function EditUser() {
    const {id}=useParams()
    const edituser=useSelector((state)=>
           state.user.value.find(user=>user.id==id)
           )
    // console.log(edituser.first);

    const [first, setfirst] = useState(edituser.first)
    const [last, setlast] = useState(edituser.last)
    const [handle, sethandle] = useState(edituser.handle)

    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    const handleeditonsubmit=(e)=>{
        dispatch(EditPost({
            id:id,first,last,handle
        }))
         e.preventDefault()
         navigate('/')
    
        
    }

    return (
        <>
           <h1>edit user</h1>
            <div className="container">
                <form onSubmit={handleeditonsubmit}>
                    <div class="row">
                        <div class="six columns">
                            <label for="exampleEmailInput">first</label>
                            <input class="u-full-width" type="text" placeholder="first..." value={first} onChange={(e) => setfirst(e.target.value)} />
                        </div>
                        <div class="six columns">
                            <label for="exampleEmailInput">Last</label>
                            <input class="u-full-width" type="text" placeholder="last..." value={last} onChange={(e) => setlast(e.target.value)} />
                        </div>
                        <div class="six columns">
                            <label for="exampleEmailInput">Handle</label>
                            <input class="u-full-width" type="text" placeholder="handle..." value={handle} onChange={(e) => sethandle(e.target.value)} />
                        </div>

                    </div>
                    <div className='my-3'>
                        <input class="button-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditUser;