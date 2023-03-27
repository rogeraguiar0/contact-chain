import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import nookies, { destroyCookie } from "nookies";
import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../../src/components/Header";
import { useAuth } from "../../../src/contexts/authContext";
import { iClientUpdate, iContactRequest } from "../../../src/types";

import { Container, EditContainer, ProfileContainer } from "./styles";
import ContactsContainer from "../../../src/components/ContactsContainer";

interface iPerfilProps {
  token: string;
}

const Perfil = ({ token }: iPerfilProps) => {
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const router = useRouter();
  const { client, setClient } = useAuth();

  const updateClientSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string(),
    telephone: yup.string(),
  });

  const { register, handleSubmit } = useForm<iClientUpdate>({
    defaultValues: {
      name: client?.name,
      email: client?.email,
      password: "",
      telephone: client?.telephone,
    },
    resolver: yupResolver(updateClientSchema),
  });

  const logout = () => {
    destroyCookie(null, "contact-chain-token");
    destroyCookie(null, "contact-chain-email");
    destroyCookie(null, "contact-chain-id");

    router.push("/");
  };

  const handleUpdate = async (body: iClientUpdate) => {
    // Tive de usar o FETCH por conta do AXIOS não estar enviando o token por algum motivo
    await fetch("http://localhost:3000/api/clients/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then(() => setEdit(false))
      .catch((err) => console.log(err));
  };

  const handleDelete = async () => {
    // Tive de usar o FETCH por conta do AXIOS não estar enviando o token por algum motivo
    await fetch("http://localhost:3000/api/clients/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const { name, email, telephone, createdAt, contacts } = client!;
  const date = new Date(createdAt);

  return (
    <>
      <Header variant="home">
        <button type="button" onClick={logout}>
          Logout
        </button>
      </Header>

      <Container>
        <div>
          {!edit ? (
            <ProfileContainer>
              <h3>Nome: {name}</h3>
              <p>E-mail: {email}</p>
              <p>Telefone: {telephone}</p>
              <p>Conta criada em: {date.toLocaleDateString()}</p>
              <button onClick={() => setEdit(true)}>Editar informações</button>
              <button onClick={() => setDeleteModal(true)}>
                Excluir conta
              </button>
              <button onClick={() => setAddModal(true)}>
                Cadastrar contatos
              </button>
            </ProfileContainer>
          ) : (
            <EditContainer>
              <form onSubmit={handleSubmit(handleUpdate)}>
                <input {...register("name")} type="text" placeholder="Name" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Senha"
                />
                <input
                  {...register("telephone")}
                  type="text"
                  placeholder="Telefone"
                />
                <button type="submit">Salvar</button>
              </form>
              <button type="button" onClick={() => setEdit(false)}>
                Cancelar
              </button>
            </EditContainer>
          )}

          <ContactsContainer
            token={token}
            contacts={contacts}
            addModal={addModal}
            setAddModal={setAddModal}
          />
        </div>
      </Container>

      {deleteModal && (
        <>
          Deseja deletar a sua conta?{" "}
          <button onClick={handleDelete}>Sim</button>{" "}
          <button onClick={() => setDeleteModal(false)}>Não</button>
        </>
      )}
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

export default Perfil;
