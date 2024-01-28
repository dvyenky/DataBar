import React from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import BarChart from "./components/BarChart";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <h1>Data Table and Bar Chart Visualization</h1>
      <SearchBar />
      <DataTable />
      <BarChart />
      <Pagination />
    </div>
  );
}

export default App;
