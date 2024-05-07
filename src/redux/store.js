import contactReduser from "./contactsSlice";
import filterReducer from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const contactsPersistConfig = {
  key: "contact",
  storage,
  // whiteList: [""],
};
const persistContactReduser = persistReducer(
  contactsPersistConfig,
  contactReduser
);
export const store = configureStore({
  reducer: {
    contacts: persistContactReduser,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
