import styled from "styled-components";
import Link from "next/link";

export const Main = styled.main`
  height: 100%;
  margin: 160px auto 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  flex: 1;

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

  @media (min-width: 768px) {
    margin-bottom: 40px;

    section {
      gap: 80px;

      & > p {
        text-align: left;
      }

      div {
        justify-content: center;
        gap: 80px;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 32px 8px;
  background-color: var(--gray-0);
  color: var(--gray-5);
  flex-shrink: 0;

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    /* position: sticky;
    bottom: 0;
    left: 0; */
  }
`;

export const StyledLink = styled(Link)`
  width: 116px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: var(--gray-0);
  color: var(--gray-5);
  border-radius: 4px;
  font-size: var(--font-size-3);
  text-decoration: none;
  transition: 400ms;

  &:hover {
    border: 1px solid var(--gray-0);
    background-color: var(--gray-5);
    color: var(--gray-0);
    transition: 400ms;
  }

  @media (min-width: 768px) {
    width: 146px;
    padding: 10px 0;
  }
`;
