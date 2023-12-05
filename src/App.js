import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Form from './Components/Form/Form';

function App() {

  return (
    <div className="App">
      {/* <Side/> */}
      <BrowserRouter>

        <Routes>
          <Route path="/" >
            <Route index element={<Menu />} />
            <Route path='/form' index element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
