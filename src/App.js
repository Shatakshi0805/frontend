import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const data = await fetch(`http://127.0.0.1:8000/getUsers`)
    const json = await data.json()
    setUsers(json.data)
  }

  const deleteUser = (id) => {
    const tempArr = users;
    const newUsers = tempArr.filter((item,idx) => id != idx)
    setUsers( newUsers)
  }

  return (
    <div className="App">
      <h1>Users Data</h1>
      <table style={{fontFamily: "arial", borderCollapse: "collapse", width: "50%", margin: "5%"}}>
      <tr style={{border: "1px solid gray"}}>
          <th style={{border: "1px solid gray"}}>Name</th>
          <th style={{border: "1px solid gray"}}>Username</th>
          <th style={{border: "1px solid gray"}}>Email</th>
          <th style={{border: "1px solid gray"}}>Phone Number</th>
        </tr>
      {users.map((user, idx) => 
        (<tr style={{border: "1px solid gray"}} key={user.id}>
          <td style={{border: "1px solid gray"}}>{user.name}</td>
          <td style={{border: "1px solid gray"}}>{user.username}</td>
          <td style={{border: "1px solid gray"}}>{user.email}</td>
          <td style={{border: "1px solid gray"}}>{user.phone}</td>
          <button onClick={() => deleteUser(idx)}>Delete</button>
        </tr>)
      )}
      </table>
    </div>
  );
}

export default App;
