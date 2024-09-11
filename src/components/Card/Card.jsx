import { StyledCard } from "../styles/StyledCard.jsx";

export function Card({ item, isShown, onClick }) {
  return (
    <StyledCard onClick={onClick} disabled={isShown} $shown={isShown}>
      {isShown ? item : "❓"}
    </StyledCard>
  );
}
