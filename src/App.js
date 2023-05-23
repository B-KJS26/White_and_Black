import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Splash from './Spalsh/Splash';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
