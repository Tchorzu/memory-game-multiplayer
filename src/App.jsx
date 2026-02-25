import { useState } from "react";
import { Cards } from "./components/Cards/Cards.jsx";
import { CARD_ITEMS } from "./utils/CardItems.js";
import { StyledButton } from "./components/styles/StyledButton.jsx";
import { StyledPlayer } from "./components/styles/StyledPlayer.jsx";
import { StyledWinner } from "./components/styles/StyledWinner.jsx";

function shuffleCard(array) {
  return array.sort(() => Math.random() - 0.5);
}

const playerPoints = [
  { id: 1, point: 0 },
  { id: 2, point: 0 },
];

function App() {
  const [cards, setCards] = useState(shuffleCard([...CARD_ITEMS]));
  const [checkCard, setCheckCard] = useState(null);
  const [canClick, setCanClick] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [points, setPoints] = useState(playerPoints);

  function handleCardClick(id) {
    if (!canClick) {
      return;
    }

    if (checkCard === null) {
      setCheckCard(id);
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            return { ...card, isShown: true };
          } else {
            return { ...card };
          }
        }),
      );
    } else {
      setCanClick(false);
      const prevCheckCard = cards.filter((card) => card.id === checkCard);
      let nowCheckCard = null;
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            nowCheckCard = card;
            return { ...card, isShown: true };
          } else {
            return { ...card };
          }
        }),
      );

      if (prevCheckCard[0].item !== nowCheckCard.item) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.id === prevCheckCard[0].id) {
                return { ...card, isShown: false };
              } else if (card.id === nowCheckCard.id) {
                return { ...card, isShown: false };
              } else {
                return { ...card };
              }
            }),
          );
          setCurrentPlayer((prevPlayer) => {
            if (prevPlayer === 1) {
              return 2;
            } else {
              return 1;
            }
          });
        }, 800);
      } else {
        setPoints(
          points.map((point) => {
            if (point.id === currentPlayer) {
              return { ...point, point: point.point + 1 };
            } else {
              return { ...point };
            }
          }),
        );
      }

      setCheckCard(null);
      setTimeout(() => setCanClick(true), 800);
    }
  }

  function handleResetClick() {
    setCards(shuffleCard(cards.map((card) => ({ ...card, isShown: false }))));
    setPoints(
      points.map((point) => {
        return { ...point, point: 0 };
      }),
    );
    setCurrentPlayer(1);
  }

  function checkWinPlayer() {
    if (points[0].point === points[1].point) {
      return <StyledWinner>Remis!</StyledWinner>;
    } else if (points[0].point > points[1].point) {
      return <StyledWinner>Wygrywa gracz {points[0].id}</StyledWinner>;
    } else {
      return <StyledWinner>Wygrywa gracz {points[1].id}</StyledWinner>;
    }
  }

  return (
    <div className="container">
      <StyledPlayer>Ruch gracza {currentPlayer}</StyledPlayer>
      <Cards cards={cards} onCardClick={handleCardClick} />
      {cards.every((card) => card.isShown) && checkWinPlayer()}
      <StyledButton onClick={handleResetClick}>Zresetuj</StyledButton>
      {points.map(({ id, point }) => (
        <div key={id}>
          Gracz {id}: {point}
        </div>
      ))}
    </div>
  );
}

export default App;
