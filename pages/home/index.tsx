import nookies from "nookies";
import { GetServerSideProps } from "next";
import Header from "../../src/components/Header";
import { api } from "../../src/api/axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import Link from "next/link";
import { iClient } from "../../src/types";

interface iHomeProps {
  email: string;
  token: string;
  id: string;
}

const Home = ({ email, token, id }: iHomeProps) => {
  const [clients, setClients] = useState<iClient[]>([]);

  const getClients = async () => {
    const res = await api.get("/clients/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      await getClients().then((res) => setClients(res));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header variant="home" first="perfil" />

      <Container>
        <h2>Lista de usuários:</h2>
        <ul>
          {clients.length ? (
            clients.map((elt: iClient, i) => (
              <Link href={`/home/client/${elt.id}`} key={i}>
                {elt.name}
              </Link>
            ))
          ) : (
            <>Ainda não existem outros clientes</>
          )}
        </ul>
      </Container>
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
      name: cookies["contact-chain-id"],
    },
  };
};

export default Home;
