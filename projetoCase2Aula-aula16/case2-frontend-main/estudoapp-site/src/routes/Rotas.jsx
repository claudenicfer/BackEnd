import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Funcionalidades from "../pages/Funcionalidades";
import Login from "../pages/Login";
import AdminFuncionalidades from "../pages/Admin/AdminFuncionalidades";
import AdminSobre from "../pages/Admin/AdminSobre";
import PrivateRoute from "../components/PrivateRoute";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/funcionalidades" element={<Funcionalidades />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/funcionalidades"
        element={
          <PrivateRoute>
            <AdminFuncionalidades />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/sobre"
        element={
          <PrivateRoute>
            <AdminSobre />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default Rotas;
