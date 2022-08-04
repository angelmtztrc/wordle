import dictionary from '@data/dictionary.txt';

export const getDictionary = async (): Promise<string[]> => {
  let values: string[] = [];
  await fetch(dictionary)
    .then(res => res.text())
    .then(text => {
      const WORD_LENGTH_ALLOWED = 5;
      const words = text
        .split('\n')
        .filter((word: string) => word.length === WORD_LENGTH_ALLOWED);

      values = words;
    })
    .catch(err => console.log(err));

  return values;
};
