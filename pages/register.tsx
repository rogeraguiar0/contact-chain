import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { iClientRequest } from "../src/types";

import { api } from "../src/api/axios";

const Register = () => {
  const router = useRouter();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    telephone: yup.string().required("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iClientRequest>({
    resolver: yupResolver(formSchema),
  });

  const handleRegister = (data: iClientRequest) => {
    api
      .post("/clients/create", data)
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit(handleRegister)}>
        <input {...register("name")} type="text" placeholder="Nome" />
        {errors.name?.message && <span>{errors.name.message}</span>}
        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email?.message && <span>{errors.email.message}</span>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password?.message && <span>{errors.password.message}</span>}
        <input {...register("telephone")} type="text" placeholder="Telefone" />
        {errors.telephone?.message && <span>{errors.telephone.message}</span>}
        <button type="submit">Cadastrar</button>
      </form>

      <button type="button" onClick={() => router.push("/")}>
        Login
      </button>
    </>
  );
};

export default Register;
