const Keycap = ({ value }: KeycapProps) => {
  return (
    <span className="cursor-pointer rounded-lg bg-light-gray px-4 py-3 font-body font-medium text-davys-grey dark:bg-independence dark:text-white ">
      {value}
    </span>
  );
};

type KeycapProps = {
  value: string;
};

export default Keycap;
