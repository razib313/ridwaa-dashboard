import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees").then(res => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
