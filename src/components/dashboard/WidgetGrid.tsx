'use client';

import { SimpleWidget } from './SimpleWidget';
import { IoCalculatorOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.counter);

  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <SimpleWidget
        title={count}
        label="Contador"
        subtitle="Productos agregados"
        href="/dashboard/counter"
        icon={<IoCalculatorOutline size={50} />}
      />
    </div>
  );
};
