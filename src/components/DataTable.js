import React, { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/data');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(setData(jsonData))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Value 1</th>
            <th>Value 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" checked={item.checked} /></td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value1}</td>
              <td>{item.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
