import cls from 'classnames';

const CharacterBox = ({ value = '', validation }: CharacterBoxProps) => {
  return (
    <div
      className={cls(
        validation === 'right'
          ? 'bg-forest-green text-white'
          : validation === 'wrong'
          ? 'bg-old-gold text-white'
          : validation === 'not-found'
          ? 'bg-davys-grey text-white'
          : !validation && value
          ? ' border-slate-500 bg-transparent text-black'
          : 'border-transparent  bg-gainsboro dark:bg-charcoal',
        'relative col-span-1 flex items-center justify-center rounded-lg  border py-4 px-6 dark:text-white'
      )}
    >
      <span className="invisible font-body text-4xl font-bold">A</span>
      <span className="absolute font-body text-4xl font-bold ">{value}</span>
    </div>
  );
};

type CharacterBoxProps = {
  value: string;
  validation?: string;
};

export default CharacterBox;
