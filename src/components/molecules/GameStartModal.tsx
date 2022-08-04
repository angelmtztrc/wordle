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
    <Modal title="¿Como jugar?" open={isOpen} onClose={() => {}}>
      <div className="mt-6 space-y-2 font-body text-base dark:text-white">
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p>Cada intento debe ser una palabra de cinco letras.</p>
        <p>
          Después de cada intento, el color de cada letra cambiará para mostrar
          que tan cerca estas de adivinar la palabra.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-body text-lg font-medium dark:text-white">
          Ejemplos
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="G" validation="right" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="T" validation="" />
          <CharacterBox value="O" validation="" />
          <CharacterBox value="S" validation="" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          La letra <span className="font-bold">G</span> esta en la palabra y en
          la posicion correcta.
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="V" validation="" />
          <CharacterBox value="O" validation="" />
          <CharacterBox value="C" validation="wrong" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="L" validation="" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          La letra <span className="font-bold">C</span> se encuentra en la
          palabra pero en la posicion incorrecta.
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 px-4">
          <CharacterBox value="C" validation="" />
          <CharacterBox value="A" validation="" />
          <CharacterBox value="N" validation="" />
          <CharacterBox value="T" validation="" />
          <CharacterBox value="O" validation="not-found" />
        </div>
        <p className="mt-4 font-body dark:text-white">
          La letra <span className="font-bold">O</span> no se encuentra en la
          palabra.
        </p>
        <p className="mt-4 font-body dark:text-white">
          Puede haber letras repetidas en la palabra, las pistas son
          independientes de cada letra.
        </p>
        <p className="mt-4 text-center font-body dark:text-white">
          Nuevas palabras generadas cada cinco minutos!
        </p>
        <div className="mt-2 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="rounded bg-forest-green px-4 py-2 font-body text-lg font-bold uppercase text-white"
          >
            Jugar!
          </button>
        </div>
      </div>
    </Modal>
  );
};

type GameStartModalProps = {};

export default GameStartModal;
