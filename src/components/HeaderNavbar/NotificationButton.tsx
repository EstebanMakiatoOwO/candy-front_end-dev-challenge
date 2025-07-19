import NotificationIcon from '@/assets/icons/headernav/notification.svg';

interface NotificationButtonProps {
  hasNotification?: boolean;
}

export const NotificationButton = ({ hasNotification }: NotificationButtonProps) => {
  return (
    <button
      type="button"
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400"
      aria-label="Notificaciones"
    >
      <img src={NotificationIcon} alt="Notificaciones" className="w-6 h-6" />
      {hasNotification && (
        <span className="absolute -top-0.5 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
      )}
    </button>
  );
};
