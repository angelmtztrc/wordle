const Keycap = ({ value, onClick }: KeycapProps) => {
  return (
    <span
      onClick={() => onClick(value)}
      className="cursor-pointer rounded-lg bg-light-gray px-4 py-3 font-body font-medium text-davys-grey dark:bg-independence dark:text-white "
    >
      {value}
    </span>
  );
};

type KeycapProps = {
  value: string;
  onClick: (key: string) => void;
};

export default Keycap;
