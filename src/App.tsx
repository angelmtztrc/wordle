import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import cls from 'classnames';
import { useTimer } from 'react-timer-hook';

import { setWord } from '@store/slices/root.slice';

import { getDictionary } from '@utils/dictionary.util';
import { getRandom } from '@utils/get-random.util';

import { useRootDispatch, useRootSelector } from '@hooks';

import {
  Header,
  Keyboard,
  CharactersGrid,
  GameStartModal,
  StatisticsModal
} from '@molecules';

const App = () => {
  const isDark = useRootSelector(state => state.isDarkMode);
  const dispatch = useRootDispatch();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const { minutes, seconds } = useTimer({
    expiryTimestamp: time,
    autoStart: true
  });

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
        <GameStartModal />
        <StatisticsModal minutes={minutes} seconds={seconds} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="bg-cultured-200 dark:bg-space-cadet-100 dark:text-white shadow"
      />
    </div>
  );
};

export default App;
