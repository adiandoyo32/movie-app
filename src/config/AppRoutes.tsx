import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
