import NavbarAdmin from "../../components/navbarAdmin";

const HomePageAdmin = () => {
	return (
		<main className="flex">
			<NavbarAdmin />

			<section className="w-full min-h-screen">
				<div className="min-w-full h-20 bg-[#FCFAFA] flex items-center m-auto  justify-around">
					<p className="w-3/4 text-center italic text-gray-500">
						Quando buscamos a excelência, não temos limites para
						atingir aquilo que parece impossivel aos outros!
					</p>

					<button
						type="button"
						className=" bg-[#509CDB] px-6 py-1 rounded-md text-white"
					>
						Sair
					</button>
				</div>

				<div className="w-full flex flex-col justify-center items-center gap-16 px-16 mt-16">
					<h1 className="text-2xl font-semibold underline underline-offset-4">
						Bem vindo a Dashboard do administrador
					</h1>

					<div className="h-auto w-full flex flex-col justify-between">
						<div className="p-8 flex flex-col gap-4">
							<h2 className="text-xl font-semibold cursor-pointer hover:text-blue-500">
								Adicione ou remova professores
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum error fugiat
								necessitatibus labore aperiam, incidunt
								distinctio repellendus numquam consequatur
								eaque? Eveniet nostrum consectetur beatae odit
								fugiat quia tempore repellendus nobis.
							</p>
						</div>

						<div className="p-8 flex flex-col gap-4">
							<h2 className="text-xl font-semibold cursor-pointer hover:text-blue-500">
								Adicione ou remova alunos
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum error fugiat
								necessitatibus labore aperiam, incidunt
								distinctio repellendus numquam consequatur
								eaque? Eveniet nostrum consectetur beatae odit
								fugiat quia tempore repellendus nobis.
							</p>
						</div>

						<div className="p-8 flex flex-col gap-4">
							<h2 className="text-xl font-semibold cursor-pointer hover:text-blue-500">
								Adicione ou remova salas
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum error fugiat
								necessitatibus labore aperiam, incidunt
								distinctio repellendus numquam consequatur
								eaque? Eveniet nostrum consectetur beatae odit
								fugiat quia tempore repellendus nobis.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default HomePageAdmin;
