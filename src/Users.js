import React, { useState, useEffect, Fragment } from "react";

const Users =  () =>  {
  
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
            // make sure to check for errors
            return response.json();
            })
            .then(json => {
            setData(json)
            });
    }, [])

    return (
        <Fragment>
            <ul>
                {data.map(user => (
                    <li key={user.name}>{user.name} | {user.email} | {user.phone}</li>
                ))}
            </ul>
            <ol>
                {data.map(user => (
                    <li key={user.name}>{user.name} | {user.email} | {user.phone}</li>
                ))}               
            </ol>
        </Fragment>
    );
}

export default Users;