import Adduser from './components/Adduser'
import Navbar from './components/Navbar'
import AllUser from './components/AllUser'
import Codeforinterview from './components/Codeforinterview'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Codeforinterview/>}/>
        <Route path = "/all" element={<AllUser/>}/>
        <Route path = "/add" element={<Adduser/>}/>
        <Route path = "/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
