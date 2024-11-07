import AccordionManaha from "../../components/accordion/AccordionManha";
import AccordionTarde from "../../components/accordion/AccordionTarde";
import NavbarAdmin from "../../components/navbarAdmin";
import { ModalsHooks } from "../../services/hooks/modals";

const SalasPageAdmin = () => {
  const { openLoginModal } = ModalsHooks();

  return (
    <main className="flex">
      <NavbarAdmin />
      <section className="w-full flex flex-col min-h-screen">
        <div className="w-full h-20 bg-[#FCFAFA] flex items-center m-auto justify-around px-4">
          <p className="w-3/4 text-left italic text-gray-500">Salas</p>

          <div className="flex gap-8 items-center w-full justify-end">
            <button
              type="button"
              className=" bg-[#509CDB] px-6 py-1 rounded-md text-white"
              onClick={() => openLoginModal()}
            >
              Adiconar Sala
            </button>

            <button
              type="button"
              className=" bg-[#a9b1b8] px-6 py-1 rounded-md text-white"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="h-full bg-gray-100 flex items-center justify-center">
          <AccordionManaha />
          <AccordionTarde />
        </div>
      </section>
    </main>
  );
};

export default SalasPageAdmin;
