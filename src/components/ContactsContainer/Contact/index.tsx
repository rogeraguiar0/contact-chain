import { iContactRequest, iContactResponse } from "../../../types";

interface iContactProps {
  token: string;
  contact: iContactResponse;
}

const Contact = ({ token, contact }: iContactProps) => {
  const handleUpdate = async (body: iContactRequest) => {
    // Não deu tempo de implementar a lógica, estou trabalhando nisso
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/api/contacts/delete/${contact.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }).catch((err) => console.log(err));
  };

  const { name, email, telephone, createdAt } = contact;
  const date = new Date(createdAt);

  return (
    <li>
      <h3>Contato: {name}</h3>
      <p>E-mail: {email}</p>
      <p>Telephone: {telephone}</p>
      <p>Data de adição: {date.toLocaleDateString()}</p>
      <button onClick={handleDelete}>Deletar</button>
    </li>
  );
};

export default Contact;
