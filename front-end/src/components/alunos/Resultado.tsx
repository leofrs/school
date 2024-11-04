import { listaDeQuestoesMatematica } from "../../db/questions";

interface Props {
	submittedData: {
		[key: string]: string;
	};
	setSubmittedData: React.Dispatch<
		React.SetStateAction<{
			[key: string]: string;
		} | null>
	>;
	score: string;
}

const Resultado = ({ submittedData, setSubmittedData, score }: Props) => {
	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-center mb-4">
				Resultados do Quiz
			</h2>
			{listaDeQuestoesMatematica.map((question) => {
				const { id, questao, pergunta, respostaCorreta } = question;
				return (
					<div className="mb-4" key={id}>
						<p className="mb-2">
							<strong>
								Questão {questao}: {pergunta}
							</strong>
						</p>
						<div className="w-full h-auto flex flex-col mb-2">
							<p
								className={`mb-2 font-bold ${
									submittedData[`question${id}`] ===
									respostaCorreta
										? "text-green-500"
										: "text-red-500"
								}`}
							>
								Sua resposta: {submittedData[`question${id}`]}
							</p>
							<p className="mb-2 text-blue-500">
								<strong>
									Resposta correta: {respostaCorreta}
								</strong>
							</p>
						</div>
					</div>
				);
			})}

			<p className="text-xl font-bold text-center my-4">
				Sua nota: {score}
			</p>

			<button
				onClick={() => setSubmittedData(null)}
				className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
			>
				Fazer o Quiz Novamente
			</button>
		</div>
	);
};

export default Resultado;
