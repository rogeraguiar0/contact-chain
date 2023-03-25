import { useAuth } from "../../src/contexts/authContext";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { iLogin } from "../../src/types";
import { Container } from "./styles";
import Header from "../../src/components/Header";

const Login = () => {
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
      <Header />
      <Container>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <input {...register("email")} type="text" placeholder="Email" />
          <span>{errors.email?.message}</span>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
          <button type="submit">Enviar</button>
        </form>
      </Container>
    </>
  );
};

export default Login;
