import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
     axios.get(' http://localhost:3000/users') // ngambil data
     .then(response=>setUsers(response.data)) //response sukses 
     .catch(error => console.log(error)) //response error
  })
  return (
    <div className="container mt-5">
      <h1>CRUD ReactJS With JSON-Server</h1>
      <Link to='/tambahdata'>
     
      <Button label='Tambah Data' variant='success' type='button'/>
      </Link>
      
      <hr />

      <table className="table">
        <thead className="table-dark">
            <tr className="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {users.map((users,index)=>(

            <tr className="text-center" key={index}>
                <td>{index+1}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.password}</td>
                <td>
                  <div className="btn-group">
                    <Button label='edit' variant='primary'/>
                    <Button label='delete' variant='warning'/>
                  </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;