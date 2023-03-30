import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>CRUD ReactJS With JSON-Server</h1>
      <a href="#" className="btn btn-success">Tambah Data +</a>
      <hr />

      <table className="table">
        <thead className="table-dark">
            <tr className="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-center">
                <td>1</td>
                <td>Fajar</td>
                <td>mf.fajarrsh@gmail.com</td>
                <td>
                    <a href="#" className="btn btn-warning mx-1">Edit</a>
                    <a href="#" className="btn btn-danger mx-1" >Delete</a>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
