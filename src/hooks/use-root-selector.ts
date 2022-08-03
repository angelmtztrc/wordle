import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@store';

const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useRootSelector;
