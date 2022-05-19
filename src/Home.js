import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/Connection">Connection</Link>
        <Link to="/DeppartmentsList">DepartmentsList</Link>
        <Link to="/MoviesList">MoviesList</Link>
        <Link to="/MeteoList">MeteoList</Link>
        <Link to="/CoursSpring">CoursSpring</Link>
      </Box>
    );
  }
}

export default Home;
