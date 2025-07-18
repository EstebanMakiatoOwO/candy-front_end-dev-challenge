import { NavItem } from "./NavItem";
import HomeIcon from '@/assets/icons/leftnav/home.svg?react';
import ShopIcon from '@/assets/icons/leftnav/shop.svg?react';
import GalleryIcon from '@/assets/icons/leftnav/gallery.svg?react';
import HistoryIcon from '@/assets/icons/leftnav/history.svg?react';
import PremiumIcon from '@/assets/icons/leftnav/premium.svg?react';
import LineSvg from '@/assets/line.svg?react';
import type { NavItemType } from "./types";

const navItems: NavItemType[] = [
  { path: "/", icon: HomeIcon, label: "Home" },
  { path: "/shop", icon: ShopIcon, label: "Shop" },
  { path: "/premium", icon: PremiumIcon, label: "Premium" },
  { path: "/history", icon: HistoryIcon, label: "History" },
  { path: "/gallery", icon: GalleryIcon, label: "Gallery" },
];

export const LeftSideNavbar: React.FC = () => {
  return (
    <div className="h-96 border-r border-gray-300 flex flex-col items-center justify-end relative overflow-visible">
      <aside
        className="group sticky top-24 left-0 w-24 hover:w-44 h-[calc(100vh-6rem)] bg-white transition-all duration-300 ease-in-out z-10 overflow-x-hidden pt-10 pr-8 pb-7 pl-8"
        aria-label="Sidebar"
      >
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="flex flex-col gap-9 h-full transition-all duration-300 ease-in-out"
        >
          {navItems.map(({ path, icon, label }) => (
            <NavItem key={path} path={path} icon={icon} label={label} />
          ))}
        </nav>
      </aside>

      <LineSvg
        className="mt-auto -mb-2.5 rotate-90 self-end mr-[-4.8px] scale-125"
        aria-hidden="true"
      />
    </div>
  );
};
