import { Container, FeedCard } from "./styles";

const Feedbacks = () => {
  const data = [
    {
      name: "Barry Allen",
      feedback:
        "Ao usar o Contact-Chain fiquei impressionado com a velocidade do site, pela primeira vez sinto que uma aplicação consegue me acompanhar. Recomendo demais!",
    },
    {
      name: "Tony Stark",
      feedback:
        "A tecnologia usada no site é realmente impressionante, simples mas ao mesmo tempo robusta e apresenta bastante performance. Estou considerando implementar no J.A.R.V.I.S",
    },
    {
      name: "Bruce Banner",
      feedback:
        "Migrei pro Contact-Chain e nunca mais me irritei ao organizar meus contatos, indiquei para todos os Vinga... Quero dizer, meus amigos.",
    },
  ];

  return (
    <Container>
      <h2>Opiniões dos nossos principais clientes:</h2>

      <ul>
        {data.map((elt, i) => (
          <FeedCard key={i}>
            <h3>{elt.name}:</h3>
            <p>- "{elt.feedback}"</p>
          </FeedCard>
        ))}
      </ul>

      <span>O que está esperando? Entre e conheça nosso site!</span>
    </Container>
  );
};

export default Feedbacks;
