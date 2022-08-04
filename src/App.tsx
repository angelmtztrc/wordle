import { useEffect } from 'react';
import cls from 'classnames';

import dictionary from './data/dictionary.txt';

import { getRandom } from '@utils/get-random.util';
import { useRootDispatch, useRootSelector } from '@hooks';

import { Header, Keyboard, CharactersGrid } from '@molecules';
import { setWord } from '@store/slices/root.slice';
import { getDictionary } from '@utils/dictionary.util';

const App = () => {
  const isDark = useRootSelector(state => state.isDarkMode);
  const dispatch = useRootDispatch();

  useEffect(() => {
    (async function () {
      const words = await getDictionary();
      const randomWord = getRandom<string>(words);
      dispatch(setWord(randomWord.toUpperCase()));
    })();
  }, []);

  return (
    <div
      className={cls(
        isDark && 'dark',
        'transition-colors duration-300 ease-in-out'
      )}
    >
      <div
        className={'flex min-h-screen bg-cultured-100 dark:bg-space-cadet-200'}
      >
        <div className="mx-auto w-full max-w-2xl flex-1">
          <Header />
          <CharactersGrid />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default App;
