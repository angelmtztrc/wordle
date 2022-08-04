import cls from 'classnames';

import { useRootSelector } from '@hooks';

const CharacterBox = ({ value = '', valueIndex, row }: CharacterBoxProps) => {
  const validation = useRootSelector(
    state => state.validation[row][valueIndex]
  );

  return (
    <div
      className={cls(
        validation === 'right'
          ? 'bg-forest-green'
          : validation === 'wrong'
          ? 'bg-old-gold'
          : validation === 'not-found'
          ? 'bg-davys-grey'
          : 'bg-gainsboro  dark:bg-charcoal',
        'relative col-span-1 flex items-center justify-center rounded-lg  py-4 px-6'
      )}
    >
      <span className="invisible font-body text-4xl font-bold">A</span>
      <span className="absolute font-body text-4xl font-bold text-white">
        {value}
      </span>
    </div>
  );
};

type CharacterBoxProps = {
  value: string;
  valueIndex: number;
  row: number;
};

export default CharacterBox;
