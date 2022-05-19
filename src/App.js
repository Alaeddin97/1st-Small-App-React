import "./styles.css";
import ShoppingList from "./ShoppingList";
import Connection from "./Connection";
import DeppartmentsList from "./DeppartmentsList";
import MoviesList from "./MoviesList";
import MeteoList from "./MeteoList";
import CoursSpring from "./CoursSpring";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Chip, Box } from "@mui/material";

export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="App">
      <h1 className="appTitle"></h1>
      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/Connection" element={<Connection />} />
          <Route path="/DeppartmentsList" element={<DeppartmentsList />} />
          <Route path="/MoviesList" element={<MoviesList />} />
          <Route path="/MeteoList" element={<MeteoList />} />
          <Route path="/CoursSpring" element={<CoursSpring />} />
        </Routes>
      </Box>
    </div>
  );
}
