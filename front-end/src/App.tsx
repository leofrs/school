import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePageProfessores from "./pages/professores/HomePageProfessores";
import HomePageAlunos from "./pages/alunos/HomePageAlunos";
import LoginPage from "./pages/LoginPage";
// import QuestionsPage from "./pages/alunos/QuestionsPage";
import IndexAlunos from "./pages/alunos/IndexAlunos";
import IndexProfessores from "./pages/professores/IndexProfessores";
import IndexAdmin from "./pages/admin/indexAdmin";
import HomePageAdmin from "./pages/admin/HomePageAdmin";
import ProfessorPageAdmin from "./pages/admin/ProfessorPageAdmin";
import AlunoPageAdmin from "./pages/admin/AlunoPageAdmin";
import Escola from "./pages/admin/EscolaPageAdmin";

function App() {
  const navigate = useNavigate();
  const userLocal = localStorage.getItem("user");
  const location = useLocation();
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/");
    } else if (user === "admin" && !location.pathname.startsWith("/admin")) {
      navigate("/admin");
    }
  }, [navigate, location]);

  return (
    <Routes>
      {userLocal === "professor" ? (
        <Route path="/professores" element={<IndexProfessores />}>
          <Route index element={<HomePageProfessores />} />
        </Route>
      ) : userLocal === "aluno" ? (
        <Route path="/aluno" element={<IndexAlunos />}>
          <Route index element={<HomePageAlunos />} />
        </Route>
      ) : userLocal === "admin" ? (
        <Route path="/admin" element={<IndexAdmin />}>
          <Route index element={<HomePageAdmin />} />
          <Route path="professores" element={<ProfessorPageAdmin />} />
          <Route path="alunos" element={<AlunoPageAdmin />} />
          <Route path="escola" element={<Escola />} />
        </Route>
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
