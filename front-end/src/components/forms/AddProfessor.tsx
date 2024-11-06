import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  telefone: z.number().min(11),
  genero: z.string().min(2),
  formacao: z.string().min(2),
});

type Inputs = z.infer<typeof schema>;

function AddProfessorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        {/* Nome */}
        <div className="col-span-2">
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            id="nome"
            {...register("nome")}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            placeholder="Digite seu nome"
          />
          {errors.nome?.message}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="email"
            placeholder="Digite seu e-mail"
          />
          {errors.email?.message}
        </div>

        {/* Senha */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            {...register("password", { required: true })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="password"
            placeholder="Digite sua senha"
          />
          {errors.password?.message}
        </div>

        {/* Telefone */}
        <div className="col-span-2">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefone
          </label>
          <input
            id="telefone"
            {...register("telefone", { required: true })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="tel"
            placeholder="Digite seu telefone"
          />
          {errors.telefone?.message}
        </div>

        {/* Gênero */}
        <div className="col-span-2">
          <label
            htmlFor="genero"
            className="block text-sm font-medium text-gray-700"
          >
            Gênero
          </label>
          <input
            id="genero"
            {...register("genero", { required: true })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            placeholder="Digite seu gênero"
          />
          {errors.genero?.message}
        </div>

        {/* Formação */}
        <div className="col-span-2">
          <label
            htmlFor="formacao"
            className="block text-sm font-medium text-gray-700"
          >
            Formação
          </label>
          <input
            id="formacao"
            {...register("formacao", { required: true })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            placeholder="Digite sua formação"
          />
          {errors.formacao?.message}
        </div>

        {/* Botão de Submissão */}
        <div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddProfessorForm;
