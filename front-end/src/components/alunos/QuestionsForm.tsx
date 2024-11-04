import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { listaDeQuestoesMatematica } from "../../db/questions";
import Resultado from "./Resultado";

type Inputs = {
	[key: string]: string;
};

export default function QuestionsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [submittedData, setSubmittedData] = useState<Inputs | null>(null);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setSubmittedData(data);
	};

	if (submittedData) {
		const totalQuestions = listaDeQuestoesMatematica.length;
		const correctAnswers = listaDeQuestoesMatematica.filter((question) => {
			const userAnswer = submittedData[`question${question.id}`];
			return userAnswer === question.respostaCorreta;
		}).length;

		const score = ((correctAnswers / totalQuestions) * 10).toFixed(1);
		return (
			<Resultado
				submittedData={submittedData}
				setSubmittedData={setSubmittedData}
				score={score}
			/>
		);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
		>
			<h2 className="text-2xl font-bold text-center mb-6">Matematica</h2>
			{listaDeQuestoesMatematica.map((question) => {
				const { id, questao, pergunta, placeholder } = question;
				return (
					<div key={id}>
						<p className="mb-2">
							<strong>
								Questão {questao}: {pergunta}
							</strong>
						</p>
						<div className="w-full h-auto flex flex-col items-left mb-2">
							<input
								{...register(`question${id}`, {
									required: true,
								})}
								className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder={placeholder}
							/>
							{errors[`question${id}`] && (
								<span className="text-red-500 text-xs mt-1">
									Resposta para a questão {questao} vazia
								</span>
							)}
						</div>
					</div>
				);
			})}

			<input
				type="submit"
				value={"Enviar o teste"}
				className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
			/>
		</form>
	);
}
