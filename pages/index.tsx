import { useAuth } from "../src/contexts/authContext";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { iLogin } from "../src/types";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data: iLogin) => {
    login(data);
  };

  return (
    <>
      <h1>Contact Chain!</h1>
      <p>Administre seus contatos sem dor de cabeça</p>

      <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register("email")} type="text" placeholder="Email" />
        {errors.email?.message && <span>{errors.email.message}</span>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password?.message && <span>{errors.password.message}</span>}
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={() => router.push("/register")}>
        Cadastro
      </button>
    </>
  );
};

export default Login;
