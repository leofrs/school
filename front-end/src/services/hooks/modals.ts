import { useState } from "react";
import { Professor } from "../../db/professores";

export const ModalsHooks = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(
    null
  );

  const handleProfessorClick = (professor: Professor) => {
    setSelectedProfessor(professor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfessor(null);
  };
  const openLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);
  const closeLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);

  return {
    isModalLoginOpen,
    openLoginModal,
    closeLoginModal,
    isModalOpen,
    selectedProfessor,
    handleProfessorClick,
    closeModal,
  };
};
