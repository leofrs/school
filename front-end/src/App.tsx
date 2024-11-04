import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePageProfessores from "./pages/professores/HomePageProfessores";
import { UserContext } from "./context/UserContext";
import HomePageAlunos from "./pages/alunos/HomePageAlunos";
import LoginPage from "./pages/LoginPage";
import QuestionsPage from "./pages/alunos/QuestionsPage";
import IndexAlunos from "./pages/alunos/IndexAlunos";
import IndexProfessores from "./pages/professores/IndexProfessores";
import IndexAdmin from "./pages/admin/indexAdmin";
import HomePageAdmin from "./pages/admin/HomePageAdmin";

function App() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			switch (user) {
				case "professor":
					navigate("/professores");
					break;
				case "aluno":
					navigate("/alunos");
					break;
				case "admin":
					navigate("/admin");
					break;
				default:
					navigate("/login");
					break;
			}
		} else {
			navigate("/login");
		}
	}, [user, navigate]);

	return (
		<Routes>
			<Route path="/alunos" element={<IndexAlunos />}>
				<Route index element={<HomePageAlunos />} />
				<Route path="questoes" element={<QuestionsPage />} />
			</Route>

			<Route path="/professores" element={<IndexProfessores />}>
				<Route index element={<HomePageProfessores />} />
			</Route>

			<Route path="/alunos" element={<IndexAdmin />}>
				<Route index element={<HomePageAdmin />} />
			</Route>

			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
