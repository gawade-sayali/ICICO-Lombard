import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DeletePost,Editemployoo } from "./Empslice";


function Editemp() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const editemp=useSelector(state=>
        state.emp.empvalue.find((employee)=>employee.id==id)
    )
    console.log(editemp);
    const [emp,setemp]=useState({
        name:editemp. name,
        city:editemp.city ,
    })
    const {name,city}=emp
    console.log(name);
    const inputchange=(e)=>{
        setemp({...emp,[e.target.name]:e.target.value})
    }

    return (
        <>
          <div className="container">
            <h1>edit employee</h1>
                 <div className="card bg-light col-4" style={{width:' 22rem'}}>
                            <div className="card-body">
                                <h5 className="card-title"><input value={city} name='city' onChange={(e)=>inputchange(e)}/></h5>
                                <p className="card-text"><input value={name} name='name' onChange={(e)=>inputchange(e)}/> :Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <button className="btn btn-danger mx-3" onClick={()=>dispatch(DeletePost({id:emp.id}))}>DELETE</button> */}
                             
                                <button className="btn btn-secondary" onClick={()=>dispatch(Editemployoo({id:id}))}>EDIT</button>
                                
                            </div>
                    </div>
            

          </div>
        </>
    );
}

export default Editemp;