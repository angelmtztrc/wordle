import { useRootDispatch, useRootSelector } from '@hooks';

import { closeStatisticsModal } from '@store/slices/root.slice';

import { Modal } from '@atoms';

const StatisticsModal = ({ minutes, seconds }: StatisticsModalProps) => {
  const isOpen = useRootSelector(state => state.modal === 'statistics');
  const [matches, wins] = useRootSelector(state => [state.matches, state.wins]);
  const [word, hasLose] = useRootSelector(state => [state.word, state.hasLose]);
  const dispatch = useRootDispatch();

  const handleClose = () => {
    dispatch(closeStatisticsModal());
  };

  return (
    <Modal title="Statistics" open={isOpen} onClose={() => {}}>
      <div className="mt-6 flex justify-around">
        <div className="flex flex-col items-center">
          <p className="font-body text-2xl font-extrabold dark:text-white">
            {matches}
          </p>
          <p className="font-body dark:text-white">Matches</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-body text-2xl font-extrabold dark:text-white">
            {wins}
          </p>
          <p className="font-body dark:text-white">Wins</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center space-y-4">
        {hasLose && (
          <p className="font-body dark:text-white">
            The word was <span className="font-bold">{word}</span>
          </p>
        )}

        <div className="text-center font-body dark:text-white">
          <p>Next word in</p>
          <p className="font-bold">
            0{minutes}:{seconds}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="rounded bg-forest-green px-4 py-2 font-body text-lg font-bold uppercase text-white"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

type StatisticsModalProps = {
  minutes: number;
  seconds: number;
};

export default StatisticsModal;
