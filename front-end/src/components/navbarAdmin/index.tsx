import logo from "../../assets/logo.png";

const NavbarAdmin = () => {
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
					<li className="bg-[#509CDB] w-full p-2 rounded-md cursor-pointer">
						Dashboard
					</li>
					<li className="border rounded-md w-full p-2 cursor-pointer">
						Professores
					</li>
					<li className="border rounded-md w-full p-2 cursor-pointer">
						Alunos
					</li>
					<li className="border rounded-md w-full p-2 cursor-pointer">
						Pagamentos
					</li>
					<li className="border rounded-md w-full p-2 cursor-pointer">
						Perfil
					</li>
					<li className="border rounded-md w-full p-2 cursor-pointer">
						Provas
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default NavbarAdmin;
