# Memory Game Multiplayer

## Overview

This is a multiplayer Memory Game application built using React, JavaScript and Styled-components. The game challenges the players to match pairs of cards by remembering their positions on a grid. It is a fun and engaging way to test and improve memory skills.

Created as part of the [zrozumiecreact.pl](https://zrozumiecreact.pl) course.

## Features

- **Multiplayer Mode:** The game is designed for two players.
- **Score Tracking:** The game shows the current number of points of each player.
- **Randomized Card Placement:** After each game reset, the cards are shuffled and placed randomly on the grid.
- **Fixed Number of Cards:** The number of cards on the board is predefined, creating a consistent difficulty level.
- **Reset Functionality:** The player can reset the game at any time to start over with a new shuffle of the cards.

## Getting started

To run the application follow the steps:

1. **Clone the repository**:
   ```shell
   git clone https://github.com/Tchorzu/memory-game-multiplayer
   cd memory-game-multiplayer
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) installed, then run:

    ```shell
    npm install
    ```

3. **Start the development server**:

    ```shell
    npm run dev
    ```

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **styled-components:** A library for styling React components with tagged template literals.

## How to play

- **Start the Game:** When the game starts, cards are laid face down on the grid.
- **Flip a Card:** Click on any card to flip it over and reveal the image.
- **Match Pairs:** Try to find and match pairs of cards with the same image. If the cards match, they stay face up; if not, they flip back over.
- **Player Turns:** A player in his turn reveals cards until he has not combined two of the same cards. Then there is a change of the active player.
- **Reset and Shuffle:** After each game, or if you reset the game, the cards are shuffled and placed randomly on the grid for a new challenge.
- **Win the Game:** The game will be won by the player who has the higher number of points after all the cards are revealed.