import AddProfessorForm from "../../components/forms/AddProfessor";
import AddProfessorModal from "../../components/modals/addProfessor";
import NavbarAdmin from "../../components/navbarAdmin";
import { alunosMock } from "../../db/alunos";
import { ModalsHooks } from "../../services/hooks/modals";
import InfoProfessor from "../../components/modals/infoProfessor";
import InfoAluno from "../../components/modals/infoAluno";
import { useState } from "react";

const AlunoPageAdmin = () => {
  const {
    openLoginModal,
    isModalLoginOpen,
    closeLoginModal,
    isModalOpen,
    closeModal,
    selectedProfessor,
    selectedAluno,
    handleAlunoClick,
  } = ModalsHooks();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlunos, setFilteredAlunos] = useState(alunosMock);

  const handleSearchProfessor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = alunosMock.filter(
      (aluno) =>
        aluno.nome.toLowerCase().includes(value.toLowerCase()) ||
        aluno.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAlunos(filtered);
  };

  return (
    <main className="flex">
      <NavbarAdmin />

      <section className="w-full min-h-screen">
        <div className="min-w-full h-20 bg-[#FCFAFA] flex items-center m-auto justify-around px-4">
          <p className="w-3/4 text-left italic text-gray-500">Alunos</p>

          <div className="flex gap-8 items-center w-full justify-end">
            <button
              type="button"
              className=" bg-[#509CDB] px-6 py-1 rounded-md text-white"
              onClick={() => openLoginModal()}
            >
              Adiconar Aluno
            </button>

            <button
              type="button"
              className=" bg-[#a9b1b8] px-6 py-1 rounded-md text-white"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-16 px-16 mt-16">
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearchProfessor}
            placeholder="Encontrar Aluno"
            className="w-full h-10 px-4 rounded-md border-2 border-[#509CDB] focus:outline-none focus:border-[#509CDB]"
          />

          <div className="w-full min-h-[500px] flex flex-col items-center justify-center gap-4 bg-[#FCFAFA] rounded-sm">
            <div className="w-full max-h-[500px] flex flex-col overflow-y-auto items-center justify-between px-4 py-2 bg-[#FCFAFA] rounded-md">
              {filteredAlunos && filteredAlunos.length > 0 ? (
                filteredAlunos.map((aluno) => (
                  <div
                    key={aluno.email}
                    className="w-full min-h-[150px] flex items-center justify-between px-4 py-2 bg-[#FCFAFA] rounded-md cursor-pointer"
                    onClick={() => handleAlunoClick(aluno)}
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-medium">{aluno.nome}</h4>
                        <p className="text-sm text-gray-500">{aluno.email}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h4 className="text-2xl font-medium text-gray-500">
                  Nenhum aluno foi adicionado
                </h4>
              )}
            </div>
          </div>
        </div>
      </section>

      <AddProfessorModal isOpen={isModalLoginOpen} onClose={closeLoginModal}>
        <AddProfessorForm />
      </AddProfessorModal>

      {isModalOpen && selectedProfessor && (
        <InfoProfessor professor={selectedProfessor} onClose={closeModal} />
      )}

      {isModalOpen && selectedAluno && (
        <InfoAluno aluno={selectedAluno} onClose={closeModal} />
      )}
    </main>
  );
};
export default AlunoPageAdmin;
