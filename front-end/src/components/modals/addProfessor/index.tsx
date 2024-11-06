import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AddProfessorModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className=" text-white rounded-lg shadow-lg w-full max-w-3xl max-h-fit p-6 bg-white">
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={onClose}
            className="text-black hover:text-red-400 text-xl"
          >
            Fechar
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AddProfessorModal;
