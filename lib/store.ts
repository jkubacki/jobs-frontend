import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from '@/lib/rootSaga'
import listingsSlice from '@/lib/listings/listingsSlice'
import applicationsSlice from '@/lib/applications/applicationsSlice'
import repliesSlice from '@/lib/replies/repliesSlice'

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      listings: listingsSlice.reducer,
      applications: applicationsSlice.reducer,
      replies: repliesSlice.reducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
