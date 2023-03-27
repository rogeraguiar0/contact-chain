import Feedbacks from "../src/components/Feedbacks";
import Header from "../src/components/Header";
import { Footer, Main, StyledLink } from "./styles";

const LandingPage = () => {
  return (
    <>
      <Header first="login" second="cadastro" />
      <Main>
        <h1>Bem vindo ao Contact-Chain!</h1>

        <section>
          <p>
            Precisando de um lugar para organizar os seus contatos de forma
            eficiente? O <span>Contact-Chain</span> está aqui para resolver os
            seus problemas!
          </p>
          <p>
            Basta se cadastrar com o seu melhor email e fazer o login!
            Fornecemos uma grande liberdade para adicionar, editar e remover os
            seus contatos. Além de uma interface simples e sugestiva, também
            temos mecanismos de busca para você!
          </p>
          <div>
            <StyledLink href="/login">Login</StyledLink>
            <StyledLink href="/cadastro">Cadastro</StyledLink>
          </div>
        </section>
        <Feedbacks />
      </Main>
      <Footer>
        <p>Copyright © 2023 Contact-Chain todos os direitos reservados.</p>
      </Footer>
    </>
  );
};

export default LandingPage;
