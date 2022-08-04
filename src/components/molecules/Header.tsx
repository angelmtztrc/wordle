import {
  QuestionMarkCircleIcon,
  ChartSquareBarIcon
} from '@heroicons/react/solid';

import { useRootDispatch, useRootSelector } from '@hooks';

import { Switch } from '@atoms';
import {
  openStartGameModal,
  openStatisticsModal,
  toggleDarkMode
} from '@store/slices/root.slice';

const Header = ({}: HeaderProps) => {
  const darkEnabled = useRootSelector(state => state.isDarkMode);
  const dispatch = useRootDispatch();

  return (
    <header className="mt-10 grid grid-cols-3 rounded-2xl bg-cultured-200 py-4 px-6 dark:bg-space-cadet-100">
      <div className="col-span-1 flex items-center">
        <QuestionMarkCircleIcon
          onClick={() => dispatch(openStartGameModal())}
          className="h-6 w-6 cursor-pointer text-[#818181] dark:text-gainsboro"
        />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <h1 className="font-body text-4xl font-bold uppercase leading-10 text-space-cadet-200 dark:text-gainsboro">
          Wordle
        </h1>
      </div>
      <div className="col-span-1 flex items-center justify-end space-x-2">
        <ChartSquareBarIcon
          onClick={() => dispatch(openStatisticsModal())}
          className="h-6 w-6 cursor-pointer text-[#818181] dark:text-gainsboro"
        />
        <Switch
          checked={!darkEnabled}
          onChange={() => dispatch(toggleDarkMode())}
          description="dark/light"
        />
      </div>
    </header>
  );
};

type HeaderProps = {};

export default Header;
