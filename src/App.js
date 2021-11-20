import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from "./Components/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Table />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
