import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './Pages/weather';

function App() {
  return (
     <Router>
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/weather" element={<Weather/>}/>
       </Routes>
       </Router>
  );
}

export default App;
