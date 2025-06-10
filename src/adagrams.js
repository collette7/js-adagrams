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
  const pointValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };
  
  let score = 0;
  const upperWord = word.toUpperCase();
  
  for (const letter of upperWord) {
    score += pointValues[letter] || 0;
  }
  
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  
  return score;
};

export const highestScoreFrom = (words) => {
  let bestWord = words[0];
  let bestScore = scoreWord(words[0]);
  
  for (const word of words) {
    const currentScore = scoreWord(word);
    
    if (currentScore > bestScore) {
      bestWord = word;
      bestScore = currentScore;
    } else if (currentScore === bestScore) {
      if (word.length === 10 && bestWord.length !== 10) {
        bestWord = word;
      } else if (bestWord.length !== 10 && word.length < bestWord.length) {
        bestWord = word;
      }
    }
  }
  
  return { word: bestWord, score: bestScore };
};
