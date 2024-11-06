import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePageProfessores from "./pages/professores/HomePageProfessores";
import { UserContext } from "./context/UserContext";
import HomePageAlunos from "./pages/alunos/HomePageAlunos";
import LoginPage from "./pages/LoginPage";
// import QuestionsPage from "./pages/alunos/QuestionsPage";
import IndexAlunos from "./pages/alunos/IndexAlunos";
import IndexProfessores from "./pages/professores/IndexProfessores";
import IndexAdmin from "./pages/admin/indexAdmin";
import HomePageAdmin from "./pages/admin/HomePageAdmin";
import ProfessorPageAdmin from "./pages/admin/ProfessorPageAdmin";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      {user === "professor" ? (
        <Route path="/professores" element={<IndexProfessores />}>
          <Route index element={<HomePageProfessores />} />
        </Route>
      ) : user === "aluno" ? (
        <Route path="/aluno" element={<IndexAlunos />}>
          <Route index element={<HomePageAlunos />} />
        </Route>
      ) : user === "admin" ? (
        <Route path="/admin" element={<IndexAdmin />}>
          <Route index element={<HomePageAdmin />} />
          <Route path="professores" element={<ProfessorPageAdmin />} />
        </Route>
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
