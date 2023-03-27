import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { iClient, iContactRequest, iContactResponse } from "../../types";
import { Container } from "./styles";
import Contact from "./Contact";

interface iContactsContainerProps {
  token: string;
  contacts: iContactResponse[];
  addModal: boolean;
  setAddModal: (value: boolean) => void;
}

const ContactsContainer = ({
  token,
  contacts,
  addModal,
  setAddModal,
}: iContactsContainerProps) => {
  const createContactSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    telephone: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<iContactRequest>({
    resolver: yupResolver(createContactSchema),
  });

  const handleCreate = async (body: iContactRequest) => {
    // Tive de usar o FETCH por conta do AXIOS não estar enviando o token por algum motivo
    await fetch("http://localhost:3000/api/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then(() => setAddModal(false))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        {contacts?.length ? (
          contacts?.map((elt, i) => (
            <Contact token={token} contact={elt} key={i} />
          ))
        ) : (
          <>
            Você não possui cadastros na sua conta, deseja{" "}
            <button type="button" onClick={() => setAddModal(true)}>
              criar?
            </button>
          </>
        )}
      </Container>

      {addModal && (
        <>
          <p>Criando seu novo contato</p>
          <form onSubmit={handleSubmit(handleCreate)}>
            <input
              {...register("name")}
              type="text"
              placeholder="Nome completo"
            />
            <input {...register("email")} type="email" placeholder="E-mail" />
            <input
              {...register("telephone")}
              type="text"
              placeholder="Telefone"
            />
            <button type="submit">Criar</button>
          </form>
          <button type="button" onClick={() => setAddModal(false)}>
            X
          </button>
        </>
      )}
    </>
  );
};

export default ContactsContainer;
