import { baseApi } from "./api/baseApi";
import scrollReducer from "./features/scrollSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  scroll: scrollReducer,
};
