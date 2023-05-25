import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Splash from './Spalsh/Splash';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
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
