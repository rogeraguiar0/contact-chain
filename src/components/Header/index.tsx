import React from "react";
import { DiDatabase } from "react-icons/di";

import { Container, StyledLink, StyledTitle } from "./styles";

interface iHeaderProps {
  children?: React.ReactNode;
  variant?: string;
  first?: string;
  second?: string;
}

const Header = ({ children, variant, first, second }: iHeaderProps) => {
  const captalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };

  return (
    <Container>
      <div>
        <StyledTitle href={`${variant === "home" ? "/home" : "/"}`}>
          CC
          <DiDatabase />
        </StyledTitle>

        {(first || second) && (
          <nav>
            <ul>
              {first && (
                <li>
                  <StyledLink
                    href={`/${variant === "home" ? "home/" + first : first}`}
                  >
                    {captalize(first)}
                  </StyledLink>
                </li>
              )}
              {second && (
                <li>
                  <StyledLink
                    href={`/${variant === "home" ? "home/" + second : second}`}
                  >
                    {captalize(second)}
                  </StyledLink>
                </li>
              )}
            </ul>
          </nav>
        )}

        {children && <nav>{children}</nav>}
      </div>
    </Container>
  );
};

export default Header;
