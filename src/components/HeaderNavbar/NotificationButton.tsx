import NotificationIcon from '@/assets/icons/headernav/notification.svg';
import { useState } from 'react';

interface NotificationButtonProps {
  hasNotification?: boolean;
}

export const NotificationButton = ({ hasNotification }: NotificationButtonProps) => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive((a) => !a)}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-md duration-300
        ${active ? 'bg-pink-500 scale-110 ring-4 ring-pink-300' : 'bg-pink-200 hover:scale-110 hover:bg-pink-300'}`}
      aria-label="Notificaciones"
      aria-pressed={active}
    >
      <img src={NotificationIcon} alt="Notificaciones" className="w-6 h-6" />
      {(hasNotification || active) && (
        <span className="absolute -top-0.5 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
      )}
    </button>
  );
};
