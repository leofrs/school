import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "bg-[#509CDB]" : "border";

  return (
    <section className="max-w-[250px] min-h-screen bg-[#152259] text-white">
      <div className="h-36 border-b border-b-white mb-16 flex justify-center items-center">
        <img
          src={logo}
          alt="Logo da empresa"
          className="object-cover w-20 h-20 bg-white rounded-full"
        />
      </div>

      <nav>
        <ul className="min-h-[500px] flex flex-col justify-center items-center gap-16 px-8 text-center">
          <li
            className={`${isActive(
              "/admin"
            )} w-full p-2 rounded-md cursor-pointer`}
            onClick={() => navigate("/admin")}
          >
            Dashboard
          </li>
          <li
            className={`${isActive(
              "/admin/professores"
            )} w-full p-2 rounded-md cursor-pointer`}
            onClick={() => navigate("/admin/professores")}
          >
            Professores
          </li>
          <li
            className={`${isActive(
              "/admin/alunos"
            )} w-full p-2 rounded-md cursor-pointer`}
            onClick={() => navigate("/admin/alunos")}
          >
            Alunos
          </li>
          <li
            className={`${isActive(
              "/admin/salas"
            )} w-full p-2 rounded-md cursor-pointer`}
            onClick={() => navigate("/admin/salas")}
          >
            Salas
          </li>
          <li className="border rounded-md w-full p-2 cursor-pointer">
            Provas
          </li>
          <li className="border rounded-md w-full p-2 cursor-pointer">
            Perfil
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavbarAdmin;
