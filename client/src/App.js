import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Create from "./views/Create";
import Edit from "./views/Edit";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/new"} element={<Create />} />
        <Route path={"/edit/:id"} element={<Edit />} />
          {/* REDIRECT */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
