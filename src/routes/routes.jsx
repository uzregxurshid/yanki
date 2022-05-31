import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/catalog';
import Home from '../pages/home';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
};

export default Router;
