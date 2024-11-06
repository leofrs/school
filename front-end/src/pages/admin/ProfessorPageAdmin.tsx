import AddProfessorForm from "../../components/forms/AddProfessor";
import AddProfessorModal from "../../components/modals/addProfessor";
import NavbarAdmin from "../../components/navbarAdmin";
import { ModalsHooks } from "../../services/hooks/modals";

const ProfessorPageAdmin = () => {
  const { openLoginModal, isModalLoginOpen, closeLoginModal } = ModalsHooks();
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
      </section>

      <AddProfessorModal isOpen={isModalLoginOpen} onClose={closeLoginModal}>
        <AddProfessorForm />
      </AddProfessorModal>
    </main>
  );
};

export default ProfessorPageAdmin;
