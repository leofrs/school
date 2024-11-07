import { useState } from "react";
import AccordionItem from "./Accodion-items";
import { salasMockTarde } from "../../db/salas";

const AccordionTarde = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[400px] h-auto mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Tarde</h2>
      {Object.entries(salasMockTarde).map(([key, item], index) => (
        <AccordionItem
          key={key}
          index={index}
          turno={key}
          professor={item.professores.join(", ")}
          aluno={item.alunos.join(", ")}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default AccordionTarde;
