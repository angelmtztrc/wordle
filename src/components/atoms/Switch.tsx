import { Switch as HSwitch } from '@headlessui/react';
import cls from 'classnames';

const Switch = ({ checked = false, onChange, description }: SwitchProps) => {
  return (
    <HSwitch
      checked={checked}
      onChange={onChange}
      className={cls(
        checked ? 'bg-sun' : 'bg-moon',
        'relative inline-flex h-6 w-11 items-center rounded-full bg-sun bg-cover bg-center bg-no-repeat'
      )}
    >
      <span className="sr-only">{description}</span>
      <span
        className={cls(
          checked ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out'
        )}
      />
    </HSwitch>
  );
};

type SwitchProps = {
  className?: string;
  classNamesChecked?: string;
  classNamesUnchecked?: string;
  checked: boolean;
  onChange: () => void;
  description: string;
};

export default Switch;
