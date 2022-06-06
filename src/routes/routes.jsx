import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/catalog';
import CategoryItem from '../pages/catalog/items';
import Home from '../pages/home';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:category" element={<Catalog />} />
      <Route path="/catalog/:category/:item" element={<CategoryItem />} />
    </Routes>
  );
};

export default Router;
