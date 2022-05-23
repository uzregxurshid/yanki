import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
