import AddProfessorForm from "../../components/forms/AddProfessor";
import AddProfessorModal from "../../components/modals/addProfessor";
import NavbarAdmin from "../../components/navbarAdmin";
import { professoresMock } from "../../db/professores";
import { ModalsHooks } from "../../services/hooks/modals";
import InfoProfessor from "../../components/modals/infoProfessor";
import { useState } from "react";

const ProfessorPageAdmin = () => {
  const {
    openLoginModal,
    isModalLoginOpen,
    closeLoginModal,
    isModalOpen,
    closeModal,
    handleProfessorClick,
    selectedProfessor,
  } = ModalsHooks();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfessores, setFilteredProfessores] =
    useState(professoresMock);

  const handleSearchProfessor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = professoresMock.filter(
      (professor) =>
        professor.nome.toLowerCase().includes(value.toLowerCase()) ||
        professor.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProfessores(filtered);
  };

  return (
    <main className="flex">
      <NavbarAdmin />

      <section className="w-full min-h-screen">
        <div className="min-w-full h-20 bg-[#FCFAFA] flex items-center m-auto justify-around px-4">
          <p className="w-3/4 text-left italic text-gray-500">Professores</p>

          <div className="flex gap-8 items-center w-full justify-end">
            <button
              type="button"
              className=" bg-[#509CDB] px-6 py-1 rounded-md text-white"
              onClick={() => openLoginModal()}
            >
              Adiconar Professor
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
            placeholder="Encontrar Professor"
            value={searchTerm}
            onChange={handleSearchProfessor}
            className="w-full h-10 px-4 rounded-md border-2 border-[#509CDB] focus:outline-none focus:border-[#509CDB]"
          />

          <div className="w-full min-h-[500px] flex flex-col items-center justify-center gap-4 bg-[#FCFAFA] rounded-sm">
            <div className="w-full max-h-[500px] flex flex-col gap-1 overflow-y-auto items-center justify-between px-4 py-2 bg-[#FCFAFA] rounded-md">
              {filteredProfessores.length > 0 ? (
                filteredProfessores.map((professor) => (
                  <div
                    key={professor.email}
                    className="w-full min-h-[100px] flex items-center justify-between px-4 py-2  border border-b rounded-md"
                  >
                    <div className="flex gap-4 items-center">
                      <img
                        src={professor.img}
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-medium">
                          {professor.nome}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {professor.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleProfessorClick(professor)}
                        className="rounded-md border border-gray-300 px-4"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 px-4"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 px-4"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h4 className="text-2xl font-medium text-gray-500">
                  Nenhum professor foi encontrado
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
    </main>
  );
};
export default ProfessorPageAdmin;
