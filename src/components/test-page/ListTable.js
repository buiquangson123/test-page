import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users

const ListTable = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#table" });
    doc.save("table.pdf");
  };

  const getList = async () => {
    const res = await api.get("/").catch((err) => console.log("error: ", err));
    console.log(res);
    setUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {loading && <div>Loading ...</div>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Des</th>
            <th>Age</th>
            <th>Address</th>
            <th>Telephone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            user.length > 0 &&
            user.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
                <td>{item.website}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ListTable;
