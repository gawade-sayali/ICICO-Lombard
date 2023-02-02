import React from 'react';
import { useSelector } from 'react-redux';
import { Adduser, DeletePost } from './user/UserSlice'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';



function Home() {
    const Adduser = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="container my-3">
                {Adduser.length > 0 &&
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Adduser.map((item) => {
                                const { first, last, handle } = item
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{first}</td>
                                        <td>{last}</td>
                                        <td>{handle}</td>
                                        <td>

                                            <button type="button" class="btn btn-danger m-3"
                                            onClick={() => dispatch(DeletePost({ id: item.id }))}>Delete</button>

                                            <Link to={`/Edituser/${item.id}`} >
                                                <button type="button" class="btn btn-warning">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>}
            </div>
        </>
    );
}

export default Home;