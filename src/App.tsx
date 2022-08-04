import { useEffect } from 'react';
import cls from 'classnames';

import dictionary from './data/dictionary.txt';

import { getRandom } from '@utils/get-random.util';
import { useRootDispatch, useRootSelector } from '@hooks';

import { Header, Keyboard, CharactersGrid } from '@molecules';
import { setWord } from '@store/slices/root.slice';

const App = () => {
  const isDark = useRootSelector(state => state.isDarkMode);
  const dispatch = useRootDispatch();

  useEffect(() => {
    (async function () {
      fetch(dictionary)
        .then(res => res.text())
        .then(text => {
          const WORD_LENGTH_ALLOWED = 5;
          const words = text
            .split('\n')
            .filter((word: string) => word.length === WORD_LENGTH_ALLOWED);

          const randomWord = getRandom<string>(words);
          dispatch(setWord(randomWord.toUpperCase()));
        })
        .catch();
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
