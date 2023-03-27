import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";
import Header from "../../../src/components/Header";

import { iClient } from "../../../src/types";
import { Container } from "./styles";

interface iClientPageProps {
  token: string;
}

const ClientPage = ({ token }: iClientPageProps) => {
  const [client, setClient] = useState<iClient>({} as iClient);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:3000/api/clients/retrieve/${id}`, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setClient(res))
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

  const date = new Date(client.createdAt);

  return (
    <>
      <Header variant="home" first="perfil" />

      <Container>
        <section>
          <h2>Nome: {client.name}</h2>
          <p>E-mail: {client.email}</p>
          <p>Telefone: {client.telephone}</p>
          <p>Conta criada em: {date.toLocaleDateString()}</p>
        </section>

        <section>
          <h2>Contatos:</h2>
          <ul>
            {client.contacts?.length ? (
              client.contacts.map((elt, i) => <li key={i}>- {elt.name}</li>)
            ) : (
              <>Este usuário ainda não tem contatos</>
            )}
          </ul>
        </section>
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
      token: cookies["contact-chain-token"],
    },
  };
};

export default ClientPage;
