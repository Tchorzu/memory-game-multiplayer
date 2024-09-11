import styled from "styled-components";

export const StyledCard = styled.button`
  background-color: ${({ $shown }) =>
    $shown ? "var(--var-card-shown)" : "var(--var-card)"};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ $shown }) => $shown && "transform: scale(1.1);"}
  &:hover {
    background-color: var(--var-hover-card);
  }
  &:disabled {
    color: initial;
    background: var(--var-card-shown);
  }
`;

/*
background-color: var(--var-card-shown);
transform: scale(1.1);*/
