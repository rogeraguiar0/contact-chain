import { useAuth } from "../../src/contexts/authContext";

import nookies, { destroyCookie } from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface iHomeProps {
  email: string;
  token: string;
  name: string;
}

const Home = ({ email, token, name }: iHomeProps) => {
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "contact-chain-token");
    destroyCookie(null, "contact-chain-email");
    destroyCookie(null, "contact-chain-name");

    router.push("/");
  };

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={logout}>Sair</button>

      <span>{name}</span>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies["contact-chain-token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      email: cookies["contact-chain-email"],
      token: cookies["contact-chain-token"],
      name: cookies["contact-chain-name"],
    },
  };
};

export default Home;
