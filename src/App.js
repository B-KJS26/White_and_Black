import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Splash from './Spalsh/Splash';
function App() {
  return (
    <>
      <Splash />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
