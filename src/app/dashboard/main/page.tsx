import { WidgetGrid } from '@/components';

export const metadata = {
  title: 'Dashboard Principal',
  description: 'Dashboard Principal',
};

export default function MainPage() {
  return (
    <div className="flex flex-col gap-8 p-9 min-h-screen bg-gray-200 ">
      <h1 className="text-7xl font-bold text-center">My Dashboard</h1>

      <WidgetGrid />
    </div>
  );
}
