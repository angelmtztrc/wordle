import {
  addKeyOnAnswer,
  removeKeyOnAnswer,
  submitWord
} from '@store/slices/root.slice';
import { useRootDispatch, useRootSelector } from '@hooks';

import { Keycap } from '@atoms';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
const thirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'];

const Keyboard = ({}: KeyboardProps) => {
  const currentWord = useRootSelector(state => state.answer[state.currentRow]);
  const dispatch = useRootDispatch();

  const handleClick = (key: string) => {
    if (key === 'ENTER') {
      if (currentWord.length === 5) {
        dispatch(submitWord());
      }

      return;
    }

    if (key === 'DELETE') {
      if (currentWord.length !== 0) {
        dispatch(removeKeyOnAnswer());
      }
      return;
    }

    if (currentWord.length !== 5) {
      dispatch(addKeyOnAnswer(key));
    }
  };

  return (
    <div className="mt-14 grid gap-4 rounded-2xl bg-cultured-200 px-5 py-8 dark:bg-space-cadet-100">
      <div className="flex items-center justify-center space-x-2">
        {firstRow.map(value => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
      <div className="ml-12 flex items-center justify-center space-x-2">
        {secondRow.map(value => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
      <div className="ml-4 flex items-center justify-center space-x-2">
        {thirdRow.map(value => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

type KeyboardProps = {};

export default Keyboard;
