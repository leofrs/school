import NavbarAdmin from "../../components/navbarAdmin";
import { infosEscola } from "../../db/infosEscola";

const Escola = () => {
  return (
    <main className="flex">
      <NavbarAdmin />
      <section className="w-full flex flex-col min-h-screen">
        <div className="h-full bg-gray-100 flex items-center justify-center gap-4 flex-wrap">
          {infosEscola.map((item) => (
            <div
              key={item.id}
              className="max-w-sm h-[300px] flex justify-center items-center rounded overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="px-6 py-4">
                <h6 className="font-bold text-xl mb-2 text-center">
                  {item.name}
                </h6>
                <p className="text-gray-700 text-base text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Escola;
