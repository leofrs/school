import { useState } from "react";
import AccordionItem from "./Accodion-items";
import { salasMock } from "../../db/salas";

const AccodionManha = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[400px] h-auto mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Manhã</h2>
      {Object.entries(salasMock).map(([key, item], index) => (
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

export default AccodionManha;
