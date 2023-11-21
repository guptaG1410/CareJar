import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Doctors from './pages/Doctors';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />}></Route>
          <Route path={`/doctors/:role`} element={<Doctors />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
