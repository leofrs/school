import { useState } from "react";

export const ModalsHooks = () => {
	const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
	const [isModalRegisterOpen, setIsModalRegisterOpen] =
		useState<boolean>(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [conclude, setConclude] = useState("");

	const openLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);
	const closeLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);

	const openRegisterModal = () =>
		setIsModalRegisterOpen(!isModalRegisterOpen);
	const closeRegisterModal = () =>
		setIsModalRegisterOpen(!isModalRegisterOpen);

	return {
		isModalLoginOpen,
		openLoginModal,
		closeLoginModal,
		isModalRegisterOpen,
		openRegisterModal,
		closeRegisterModal,
		loading,
		errorMessage,
		setErrorMessage,
		setLoading,
		conclude,
		setConclude,
	};
};
