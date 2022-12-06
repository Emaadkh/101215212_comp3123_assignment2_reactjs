import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Login from "./LoginUser";
import Signup from "./SignupUser";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/empList" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
