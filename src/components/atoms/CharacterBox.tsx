import cls from 'classnames';

const CharacterBox = ({ value = '', validation }: CharacterBoxProps) => {
  return (
    <div
      className={cls(
        validation === 'right'
          ? 'bg-forest-green'
          : validation === 'wrong'
          ? 'bg-old-gold'
          : validation === 'not-found'
          ? 'bg-davys-grey'
          : !validation && value
          ? ' border-slate-500 bg-transparent'
          : 'border-transparent  bg-gainsboro dark:bg-charcoal',
        'relative col-span-1 flex items-center justify-center rounded-lg  border py-4 px-6'
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
  validation?: string;
};

export default CharacterBox;
