import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {DeletePost,Editemp} from './Empslice'


function Listemp() {
    const dispatch=useDispatch()
    const emplist = useSelector(state => state.emp.empvalue)

    return (
        <>
        <div className="container row d-flex mx-4 my-3 justify-content-between">
            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Location</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody> */}
                {emplist.map((emp) => {
                    const {name,city}=emp
                    return(<div className="card bg-light col-4" style={{width:' 22rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{city}</h5>
                                <p className="card-text">{name} :Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger mx-3" onClick={()=>dispatch(DeletePost({id:emp.id}))}>DELETE</button>
                                <Link to={`/Editemp/${emp.id}`}>
                                <button className="btn btn-secondary">EDIT</button>
                                </Link>
                            </div>
                    </div>)}
                )}
                    {/* {emplist.map((emp) => {
                        return (
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.city}</td>
                                <td>
                                    <button>delete</button>
                                    <button>edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table> */}
        </div>
        </>
    );
}

export default Listemp;