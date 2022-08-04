export const answerValidation = (targetWord: string, input: string[]) => {
  const validation: Record<string, string> = {};

  input.forEach((inputChar, inputIdx) => {
    targetWord.split('').forEach((targetChar, targetIdx) => {
      if (inputIdx === targetIdx) {
        if (inputChar === targetChar) {
          validation[inputIdx] = 'right';
          return;
        }

        if (!targetWord.includes(inputChar)) {
          validation[inputIdx] = 'not-found';
          return;
        } else {
          validation[inputIdx] = 'wrong';
        }
      }
    });
  });

  for (const key in validation) {
    const actualChar = input.find((_, index) => index === Number(key));

    const charCount = input.filter(value => value === actualChar).length;
    const targetCount = targetWord
      .split('')
      .filter(value => value === actualChar).length;

    if (charCount > targetCount) {
      const char = input.findIndex((_, index) => index === Number(key));
      if (validation[char] === 'wrong') {
        validation[char] = 'not-found';
        break;
      }
    }
  }

  return validation;
};
