import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  h2 {
    text-align: center;
    font-size: 40px;
  }

  ul {
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    overflow-x: scroll;
  }

  & > span {
    color: var(--gray-1);
    font-size: var(--font-size-3);
    text-align: center;
  }

  @media (min-width: 768px) {
    ul {
      overflow-x: hidden;
    }
  }
`;

export const FeedCard = styled.li`
  height: 200px;
  min-width: 100%;
  padding: 8px;
  border: 1px solid var(--gray-0);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  h3 {
    text-align: center;
    font-size: var(--font-size-3);
  }

  p {
    text-align: left;
    font-size: var(--font-size-4);
  }

  @media (min-width: 768px) {
    min-width: 0;
    width: 400px;
  }
`;
