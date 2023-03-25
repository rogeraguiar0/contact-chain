import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
  margin-top: 160px;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--gray-0);
    font-size: 40px;
    font-weight: bolder;
    line-height: 50px;
    text-align: center;
  }

  section {
    margin: 80px 0 40px 0;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      text-align: center;
      font-size: var(--font-size-3);
      line-height: 24px;
      color: var(--gray-1);

      span {
        text-decoration: underline;
        font-weight: bold;
      }
    }

    div {
      padding: 0 8px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Footer = styled.footer`
  padding: 32px 8px;
  background-color: var(--gray-0);
  color: var(--gray-5);

  p {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  width: 116px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-0);
  color: var(--gray-5);
  border-radius: 4px;
  font-size: var(--font-size-3);
  text-decoration: none;
`;
