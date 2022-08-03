import { KeyBox } from '@atoms';
import { Fragment } from 'react';

const KeyGrid = ({}: KeyGridProps) => {
  return (
    <div className="mx-auto mt-20 grid max-w-md grid-cols-5 grid-rows-5 gap-2 px-6">
      {Array.from({ length: 5 }).map(() => (
        <Fragment>
          {Array.from({ length: 5 }).map(() => (
            <KeyBox />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

type KeyGridProps = {};

export default KeyGrid;
