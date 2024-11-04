import QuestionsForm from "../../components/alunos/QuestionsForm";

const QuestionsPage = () => {
	return (
		<section className="flex flex-col items-center gap-8 min-h-screen bg-gray-100">
			<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
				<h1>Primeria do Primeiro Bimestre</h1>
				<p>Nessa prova vão ser abordados os conteudos dos tópicos:</p>
				<p className="text-red-600 font-semibold">
					obs: Insira apenas às respostas
				</p>
			</div>
			<QuestionsForm />
		</section>
	);
};

export default QuestionsPage;
