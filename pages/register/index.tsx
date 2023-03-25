import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { iClientRequest } from "../../src/types";

import { api } from "../../src/api/axios";
import Header from "../../src/components/Header";
import { Container } from "./styles";

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
        router.push("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input {...register("name")} type="text" placeholder="Nome" />
          <span>{errors.name?.message}</span>
          <input {...register("email")} type="email" placeholder="Email" />
          <span>{errors.email?.message}</span>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
          <input
            {...register("telephone")}
            type="text"
            placeholder="Telefone"
          />
          <span>{errors.telephone?.message}</span>
          <button type="submit">Enviar</button>
        </form>
      </Container>
    </>
  );
};

export default Register;
