import { useState } from "react";
import { Professor } from "../../db/professores";
import { Alunos } from "../../db/alunos";

export const ModalsHooks = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(
    null
  );
  const [selectedAluno, setSelectedAluno] = useState<Alunos | null>(null);

  const handleProfessorClick = (professores: Professor) => {
    setSelectedProfessor(professores);
    setIsModalOpen(true);
  };
  const handleAlunoClick = (alunos: Alunos) => {
    setSelectedAluno(alunos);
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
    selectedAluno,
    handleAlunoClick,
  };
};
