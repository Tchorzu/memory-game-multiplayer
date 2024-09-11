import { Card } from "../Card/Card.jsx";
import { StyledCards } from "../styles/StyledCards.jsx";

export function Cards({ cards, onCardClick }) {
  return (
    <StyledCards>
      {cards.map((card) => (
        <Card
          key={card.id}
          item={card.item}
          isShown={card.isShown}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </StyledCards>
  );
}
