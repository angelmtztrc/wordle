export const keyboardValidation = (target: string, source: string[][]) => {
  const result: Record<string, string> = {};

  source.forEach(row => {
    row.forEach((char, charIdx) => {
      if (result[char] !== undefined) return;
      if (char === target[charIdx]) {
        result[char] = 'right';
      } else if (!target.includes(char)) {
        result[char] = 'not-found';
      } else {
        result[char] = 'wrong';
      }
    });
  });

  return result;
};
