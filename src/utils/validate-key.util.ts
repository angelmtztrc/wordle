export const validateKey = (word: string, key: string, keyIndex: number) => {
  let result = '';
  word.split('').forEach((char, charIndex) => {
    if (charIndex === keyIndex) {
      if (word.includes(key)) {
        if (char === key) {
          result = 'right';
        } else {
          result = 'wrong';
        }
      } else result = 'not-found';
    }
  });

  return result;
};
