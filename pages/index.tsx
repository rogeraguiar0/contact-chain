import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";

const Login = () => {
  const handleLogin = () => {
    signIn("github");
  };

  return (
    <>
      <h1>Contact Chain!</h1>
      <p>Administre seus contatos sem dor de cabeça</p>

      <div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Login;
