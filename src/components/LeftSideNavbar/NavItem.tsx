import { NavLink } from 'react-router-dom';
import type { NavItemType } from "./types";


export const NavItem = ({ path, icon: Icon, label }: NavItemType) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      [
        'flex items-center gap-4 h-8 transition-colors',
        isActive
          ? 'text-pink-400 fill-pink-600 font-semibold'
          : 'text-gray-600 fill-gray-600 hover:text-pink-600 hover:fill-pink-600',
      ].join(' ')
    }
    aria-label={label}
  >
    <div className="flex items-center gap-4 h-full hover:scale-125 transition-transform duration-300">
      <Icon className="w-6 h-6" />
      <span className="whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300 text-center">
        {label}
      </span>
    </div>
  </NavLink>
);
