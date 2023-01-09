import './App.css';
import ListData from './components/ListData';
import {
  BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
import Form from './components/Form';


function App() {

  return (
    <Router>
        <Routes className="App">
            <Route exact path="/" element={<Form /> } /> 
            <Route path="/listdata" element={<ListData /> } />
            {/* <Route exact path="contact" element={<Contact />} /> */}
        </Routes>
    </Router>
    
      
    
  );
}

export default App;
