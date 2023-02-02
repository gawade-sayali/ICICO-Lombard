import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { Addempdata } from "./Empslice";
import { Link } from 'react-router-dom';


function Addemp(props) {
    const navigate=useNavigate()
    const Dispatch=useDispatch()
    const [emp, setemp] = useState({
        name: '',
        city: '',
        // gender:'male',
    })
  
    const {name, city, gender} = emp
   const emplength=useSelector((state)=>state.emp.empvalue.length)
    const inputchanger=(e)=>{
        setemp({...emp,[e.target.name]:e.target.value})
        // console.log(emp);
    }
    const handleempform=(e)=>{
        Dispatch(Addempdata({
            id:emplength+1,
            name,city
        }))
        console.log({name,city});
        
        e.preventDefault()
        navigate('/Listemp')

    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleempform}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={name} name='name' onChange={(e) => inputchanger(e)} />

                    </div>
                    <div className='my-4'>
                        <select onChange={(e) => inputchanger(e)} value={city} name='city'>
                            <option value="">...</option>
                            <option value="Pune">Pune</option>
                            <option value="mumbai">mumbai</option>
                            <option value="Nagpur">Nagpur</option>
                        </select>
                    </div>
                    {/* <div className='my-4'>
                        <h3>select one :</h3>
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            <input type="radio" value="Other" name="gender" /> Other
                        
                    </div> */}
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                      
                 
                    
                </form>
            </div>
        </>
    );
}

export default Addemp;