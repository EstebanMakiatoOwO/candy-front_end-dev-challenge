import LogoIcon from "@/assets/icons/headernav/logo.svg";
import { SearchBar } from "./SearchBar";
import { BalanceButton } from "./BalanceButton";
import { NotificationButton } from "./NotificationButton";
import { ProfileButton } from "./ProfileButton";

export const HeaderNavbar = () => {
  return (
    <header className="sticky top-0 left-0 z-20 w-full h-24 bg-white flex items-center justify-between px-8 border-b border-gray-300 animate-fade-in-down">
      <div className="flex flex-1 items-center min-w-0 gap-80">
        <button
          type="button"
          aria-label="Go to homepage"
          className="hover:scale-125 transition-transform duration-300"
        >
          <img
            src={LogoIcon}
            alt="Candy logo"
            className="w-11 h-11 object-contain drop-shadow-lg hover:animate-bounce"
          />
        </button>
        <div className="transition-all duration-300 w-80">
          <SearchBar />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-base font-medium text-neutral-400">
            Assets:
          </span>
          <BalanceButton balance="80.00" />
        </div>
        <div className="flex items-center gap-4">
          <NotificationButton />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};
