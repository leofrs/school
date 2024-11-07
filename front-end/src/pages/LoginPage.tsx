import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  user: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { user, password } = data;

    if (!user || !password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      if (user === "admin" && password === "admin123") {
        localStorage.setItem("user", "admin");

        navigate("/admin");
      } else if (user === "professor" && password === "professor123") {
        localStorage.setItem("user", "professor");

        navigate("/professores");
      } else if (user === "aluno" && password === "aluno123") {
        localStorage.setItem("user", "aluno");

        navigate("/aluno");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("user", { required: true })}
              placeholder="Usuário"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.user ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.user && (
              <span className="text-red-500 text-sm">
                Este campo é obrigatório
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Senha"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                Este campo é obrigatório
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Entrar"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
