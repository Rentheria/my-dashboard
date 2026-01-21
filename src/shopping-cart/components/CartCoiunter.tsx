'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  decrement,
  increment,
  initCounterState,
} from '@/store/counter/CounterSilce';
import { useEffect } from 'react';

interface CartCoiunterProps {
  value?: number;
}
interface CounterResponse {
  count: number;
  method: string;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await fetch('/api/counter').then((res) => res.json());
  return response;
};

export const CartCoiunter = ({ value = 0 }: CartCoiunterProps) => {
  const count = useAppSelector((state) => state.counter.counter);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl font-bold"> {count}</span>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          +1
        </button>
      </div>
    </>
  );
};
