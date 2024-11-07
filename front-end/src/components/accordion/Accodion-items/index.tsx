interface AccordionType {
  turno: string;
  professor: string;
  aluno: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem = ({
  turno,
  professor,
  aluno,
  index,
  isOpen,
  onToggle,
}: AccordionType) => {
  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 px-6 font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
        onClick={() => onToggle(index)}
      >
        {turno}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 flex flex-col gap-2">
          <h6 className="text-xl font-semibold">Professores</h6>
          <p>{professor}</p>
          <div className=" text-gray-600 flex flex-col gap-2">
            <h6 className="text-xl font-semibold">Alunos</h6>
            <p>{aluno}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
