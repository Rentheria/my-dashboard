import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
  isReadonly: boolean;
}

const initialState: CounterState = {
  counter: 0,
  isReadonly: false,
};

const CounterSilce = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReadonly) return;

      state.counter = action.payload;
      state.isReadonly = true;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter === 0) return;
      state.counter -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, resetCount, initCounterState } =
  CounterSilce.actions;

export default CounterSilce.reducer;
