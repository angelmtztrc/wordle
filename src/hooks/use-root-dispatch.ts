import { useDispatch } from 'react-redux';

import { RootDispatch } from '@store';

const useRootDispatch = () => useDispatch<RootDispatch>();

export default useRootDispatch;
