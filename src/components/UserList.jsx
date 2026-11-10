import React from "react";
import './UserList.css';


function UserList() {
    let Users=[
        {
            id:1,
            name:"Sushmitha",
            age:23,
            email:"sushmithaka@gmail.com",
            city:"Benagaluru",
            role:"Java Fullstack developer",
            department:"Software development"

        },  
        {
            id:2,
            name:"Deepthi",
            age:23,
            email:"deepthi@gmail.com",
            city:"Tamilnadu",
            role:"SQL developer",
            department:"Server Development"
        },
        {
            id:3,
            name:"Varshitha",
            age:26,
            email:"varshitha@yahoo.com",
            city:"Mysuru",
            role:"Tester",
            department:"Testing"

        },
        {
            id:4,
            name:"Priya",
            age:21,
            email:"priya@gmail.com",
            city:"Bengaluru",
            role:"QA",
            department:"Testing"
        },
        {
            id:5,
            name:"Thejashwini",
            age:24,
            email:"theju@gmail.com",
            city:"Mangalore",
            role:"Python developer",
            department:"Software Development"

        }
            ]
  return (
    
    <div className="User-container">
        <h2>EMPLOYEE DETAILS</h2>
        <p className="Subtitle">Our Team Members</p>
        <div className="user-grid">
            {Users.map((user)=>(
                <div className="user-card" key={user.id}>
                    
                    <div className="user-avatar">
                        {user.name.charAt(0)}
                    </div>

                    <h3>{user.name}</h3>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Age:</strong>{user.age}</p>
                    <p><strong>City:</strong>{user.city}</p>
                    <span className="role">
                        {user.role}
                    </span>
                    <p className="department">{user.department}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserList;
