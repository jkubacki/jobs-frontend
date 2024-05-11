import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

import { AppDispatch, AppState, AppStore } from '@/lib/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppStore: () => AppStore = useStore
