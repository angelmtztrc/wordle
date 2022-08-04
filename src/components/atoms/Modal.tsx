import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';

const Modal = ({ title, children, open, onClose }: ModalProps) => {
  return (
    <Dialog
      as="div"
      open={open}
      onClose={onClose}
      className="dark relative z-10"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl border border-gainsboro border-opacity-25 bg-space-cadet-200 py-8 px-10 text-left align-middle shadow-xl transition-all">
            <Dialog.Title className="text-center font-body text-3xl font-bold dark:text-white">
              {title}
            </Dialog.Title>
            <Fragment>{children}</Fragment>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

type ModalProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default Modal;
