import {
  QuestionMarkCircleIcon,
  ChartSquareBarIcon
} from '@heroicons/react/solid';

const Header = ({}: HeaderProps) => {
  return (
    <header className="mt-10 grid grid-cols-3 rounded-2xl bg-cultured-200 py-4 px-6">
      <div className="col-span-1 flex items-center">
        <QuestionMarkCircleIcon className="h-6 w-6" />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <h1 className="font-body text-4xl font-bold uppercase leading-10">
          Wordle
        </h1>
      </div>
      <div className="col-span-1 flex items-center justify-end space-x-2">
        <ChartSquareBarIcon className="h-6 w-6" />
        <span>light/dark</span>
      </div>
    </header>
  );
};

type HeaderProps = {};

export default Header;
