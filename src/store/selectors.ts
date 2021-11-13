import { RootState } from "./store";

export const selectCurrentWeatherDate = (state: RootState) =>
  state.currentWeatherSliceReducer;
