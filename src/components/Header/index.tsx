import { DiDatabase } from "react-icons/di";

import { Container, StyledLink, StyledTitle } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <StyledTitle href="/">
          CC
          <DiDatabase />
        </StyledTitle>

        <nav>
          <ul>
            <li>
              <StyledLink href="/login">Login</StyledLink>
            </li>
            <li>
              <StyledLink href="/register">Cadastro</StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
