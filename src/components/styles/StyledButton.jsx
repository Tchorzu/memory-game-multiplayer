import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--var-button-bg);
  color: var(--var-button-txt);
  margin: 20px 0;
  padding: 10px 25px;
  border: 0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--var--hover-button-bg);
  }
`;
