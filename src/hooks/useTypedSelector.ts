import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/state';

export const useTypedSector: TypedUseSelectorHook<RootState> = useSelector;
