import { CartCoiunter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter Page',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span> Prodcutos en el carrito</span>
      <CartCoiunter value={10} />
    </div>
  );
}
