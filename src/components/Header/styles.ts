import styled from "styled-components";
import Link from "next/link";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  div {
    background-color: transparent;
    padding: 8px;
    height: 80px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h2 {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--gray-0);
      font-size: var(--font-size-2);
    }

    nav {
      ul {
        display: flex;
        align-items: center;
        gap: 16px;
      }
    }

    button {
      background-color: transparent;
      border: none;
      text-decoration: underline;
      color: var(--gray-0);
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--gray-0);
  font-weight: bold;
  font-size: 18px;
`;

export const StyledTitle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray-0);
  font-size: var(--font-size-2);
  text-decoration: none;
  font-weight: bold;
`;
