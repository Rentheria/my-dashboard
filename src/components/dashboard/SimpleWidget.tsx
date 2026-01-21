import Link from 'next/link';
import { IoEyeOutline } from 'react-icons/io5';

interface SimpleWidgetProps {
  title: string | number;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subtitle,
  icon,
  href,
  label,
}: SimpleWidgetProps) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        {label && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{label}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {icon}
            <div id="temp" className="text-center">
              <h4 className="text-4xl"> {title}</h4>
              {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2 flex justify-center">
          {href && (
            <Link
              href={href ?? '#'}
              className="text-indigo-600 text-xs font-medium flex items-center gap-1"
            >
              <IoEyeOutline size={20} />
              Ver más
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
