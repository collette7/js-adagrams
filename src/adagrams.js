export const drawLetters = () => {
  const letterPool = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1,
    K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
  };
  
  const letters = [];
  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
      letters.push(letter);
    }
  }
  
  const hand = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    hand.push(letters[randomIndex]);
    letters.splice(randomIndex, 1);
  }
  
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  let remainingLetters = [...lettersInHand];
  
  for (const letter of word) {
    const index = remainingLetters.indexOf(letter);
    if (index === -1) {
      return false;
    }
    remainingLetters.splice(index, 1);
  }
  
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  // const point_values = {
  //       1: "A, E, I, O, U, L, N, R, S, T",
  //       2: "D, G",
  //       3: "B, C, M, P",
  //       4: "F, H, V, W, Y",
  //       5: "K",
  //       8: "J, X",
  //       10: "Q, Z"
  //   }
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
