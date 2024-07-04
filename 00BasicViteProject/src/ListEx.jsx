import React, { useState } from "react";



const ListEx = () => {
    let [obj, setObj] = useState([
        {
            id: 1,
            name: "Ankit",
            marks: 55,
            email: "ankit1@gmail.com",
        },
        {
            id: 2,
            name: "Sneha",
            marks: 60,
            email: "sneha2@gmail.com",
        },
        {
            id: 3,
            name: "Rahul",
            marks: 45,
            email: "rahul3@gmail.com",
        },
        {
            id: 4,
            name: "Pooja",
            marks: 75,
            email: "pooja4@gmail.com",
        },
        {
            id: 5,
            name: "Vikram",
            marks: 65,
            email: "vikram5@gmail.com",
        },
        {
            id: 6,
            name: "Kavya",
            marks: 70,
            email: "kavya6@gmail.com",
        },
        {
            id: 7,
            name: "Amit",
            marks: 55,
            email: "amit7@gmail.com",
        },
        {
            id: 8,
            name: "Priya",
            marks: 80,
            email: "priya8@gmail.com",
        },
        {
            id: 9,
            name: "Rohit",
            marks: 60,
            email: "rohit9@gmail.com",
        },
        {
            id: 10,
            name: "Sonal",
            marks: 50,
            email: "sonal10@gmail.com",
        },
        {
            id: 11,
            name: "Arjun",
            marks: 75,
            email: "arjun11@gmail.com",
        },
        {
            id: 12,
            name: "Mira",
            marks: 65,
            email: "mira12@gmail.com",
        },
        {
            id: 13,
            name: "Siddharth",
            marks: 70,
            email: "siddharth13@gmail.com",
        },
        {
            id: 14,
            name: "Tanya",
            marks: 85,
            email: "tanya14@gmail.com",
        },
        {
            id: 15,
            name: "Manish",
            marks: 55,
            email: "manish15@gmail.com",
        }
    ]);
    
  return (
    <table>
        <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Marks</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
    {obj.map((val) => { return (
      <tr key={val.id}>
        <td>{val.id}</td>
        <td>{val.name}</td>
        <td>{val.marks}</td>
        <td>{val.email}</td>
      </tr>
    )
    })}
    </tbody>
  </table>)
};

export default ListEx;
