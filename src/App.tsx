import { useState } from 'react';
import cls from 'classnames';

import { Header, Keyboard, KeyGrid } from '@molecules';
import { useRootSelector } from '@hooks';

const App = () => {
  const darkEnabled = useRootSelector(state => state.darkMode);

  return (
    <div
      className={cls(
        darkEnabled && 'dark',
        'transition-colors duration-300 ease-in-out'
      )}
    >
      <div
        className={'flex min-h-screen bg-cultured-100 dark:bg-space-cadet-200'}
      >
        <div className="mx-auto w-full max-w-2xl flex-1">
          <Header />
          <KeyGrid />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default App;
