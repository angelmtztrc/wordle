import { Keycap } from '@atoms';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
const thirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'];

const Keyboard = ({}: KeyboardProps) => {
  return (
    <div className="mt-14 grid gap-4 rounded-2xl bg-cultured-200 px-5 py-8 dark:bg-space-cadet-100">
      <div className="flex items-center justify-center space-x-2">
        {firstRow.map(value => (
          <Keycap value={value} />
        ))}
      </div>
      <div className="ml-12 flex items-center justify-center space-x-2">
        {secondRow.map(value => (
          <Keycap value={value} />
        ))}
      </div>
      <div className="ml-4 flex items-center justify-center space-x-2">
        {thirdRow.map(value => (
          <Keycap value={value} />
        ))}
      </div>
    </div>
  );
};

type KeyboardProps = {};

export default Keyboard;
