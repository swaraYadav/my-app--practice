import './App.css';
import Appheader from './component/Appheader';
import Homepage from './component/Homepage';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Productpage from './component/Productpage';
function App() {
  return (
    <BrowserRouter>
    <Appheader></Appheader>
      <Routes>
        <Route>
          <Route path="Homepage" element={<Homepage />}/>
          <Route path="Productpage" element={<Productpage />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
