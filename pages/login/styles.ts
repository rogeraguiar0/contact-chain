import styled from "styled-components";

export const Container = styled.main`
  padding: 8px;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--gray-5);

  h2 {
    color: var(--gray-0);
    font-size: var(--font-size-2);
    text-align: center;
  }

  form {
    width: 100%;
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      width: 100%;
      padding: 8px;
      width: 100%;
      border: 1px solid var(--gray-2);
      border-radius: 4px;
      font-size: var(--font-size-3);
    }

    span {
      font-size: var(--font-size-4);
      padding: 0 4px;
      height: 16px;
      color: #ee1624;
    }

    button {
      width: 100%;
      padding: 8px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-0);
      color: var(--gray-5);
      border: 1px solid transparent;
      border-radius: 4px;
      font-size: var(--font-size-3);
      text-decoration: none;
      cursor: pointer;
      transition: 400ms;
    }

    button:hover {
      border: 1px solid var(--gray-1);
      background-color: var(--gray-5);
      color: var(--gray-1);
      transition: 400ms;
    }
  }

  @media (min-width: 768px) {
    gap: 40px;

    form {
      input,
      span,
      button {
        font-size: var(--font-size-4);
      }
    }
  }
`;
