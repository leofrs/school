import { Alunos } from "../../../db/alunos";

interface InfoAlunoProps {
  aluno: Alunos;
  onClose: () => void;
}

const InfoAluno = ({ aluno, onClose }: InfoAlunoProps) => {
  const { nome, email, genero } = aluno;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-[80%] max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Detalhes do Professor</h2>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Nome:</strong> {nome}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Gênero:</strong> {genero}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
export default InfoAluno;
