import { useRootDispatch, useRootSelector } from '@hooks';

import { closeStartGameModal } from '@store/slices/root.slice';

import { CharacterBox, Modal } from '@atoms';

const GameStartModal = ({}: GameStartModalProps) => {
  const isOpen = useRootSelector(state => state.modal === 'start-game');
  const dispatch = useRootDispatch();

  const handleClose = () => {
    dispatch(closeStartGameModal());
  };

  return (
    <Modal title="How to play" open={isOpen} onClose={() => {}}>
      <div className="mt-6 space-y-2 font-body text-base dark:text-white">
        <p>Guess the hidden word in five tries.</p>
        <p>Each try must be five characters length word.</p>
        <p>
          After each guess the color of the characters changes to show how close
          you are to getting the right word.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-body text-lg font-medium dark:text-white">
          Examples
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="G" validation="right" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="T" validation="" />
          <CharacterBox value="O" validation="" />
          <CharacterBox value="S" validation="" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          The character <span className="font-bold">G</span> is in the word and
          in the right position.
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="V" validation="" />
          <CharacterBox value="O" validation="" />
          <CharacterBox value="C" validation="wrong" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="L" validation="" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          The character <span className="font-bold">C</span> is in the word but
          in the wrong position.
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="C" validation="" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="N" validation="" />
          <CharacterBox value="T" validation="" />
          <CharacterBox value="O" validation="not-found" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          The character <span className="font-bold">O</span> is not in the word.
        </p>
        <p className="mt-4 font-body dark:text-white">
          There may be repeated characters in the word. Clues are independent
          for each character.
        </p>
        <p className="mt-4 text-center font-body dark:text-white">
          New words are generated every five minutes!
        </p>
        <div className="mt-2 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="rounded bg-forest-green px-4 py-2 font-body text-lg font-bold uppercase text-white"
          >
            Play!
          </button>
        </div>
      </div>
    </Modal>
  );
};

type GameStartModalProps = {};

export default GameStartModal;
