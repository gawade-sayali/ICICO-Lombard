import React,{useState} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Adduser } from "./UserSlice";

function AddUser(props) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [first, setfirst] = useState('')
    const [last, setlast] = useState('')
    const [handle, sethandle] = useState('')

    const id=useSelector((state)=>state.user.value.length)
   

    const handleonsubmit=(e)=>{
        e.preventDefault()
        dispatch(Adduser({
            id:id+1,
            first,last,handle

        }))
        navigate('/')
        // console.log(id); 
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleonsubmit}>
                    <div class="row">
                        <div class="six columns">
                            <label for="exampleEmailInput">first</label>
                            <input class="u-full-width" type="text" placeholder="first..." value={first} onChange={(e)=>setfirst(e.target.value)}/>
                        </div>
                        <div class="six columns">
                            <label for="exampleEmailInput">Last</label>
                            <input class="u-full-width" type="text" placeholder="last..." value={last} onChange={(e)=>setlast(e.target.value)}/>
                        </div>
                        <div class="six columns">
                            <label for="exampleEmailInput">Handle</label>
                            <input class="u-full-width" type="text" placeholder="handle..." value={handle} onChange={(e)=>sethandle(e.target.value)}/>
                        </div>
                       
                    </div>
                    <div className='my-3'>
                           <input class="button-primary" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddUser;