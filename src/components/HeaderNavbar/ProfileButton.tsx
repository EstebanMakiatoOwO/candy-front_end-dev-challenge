import ProfileImg from '@/assets/icons/headernav/avatar-background.svg';

interface ProfileButtonProps {
  imgSrc?: string;
  alt?: string;
}

export const ProfileButton = ({ imgSrc = ProfileImg, alt = 'Perfil de usuario' }: ProfileButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
      aria-label="Perfil"
    >
      <img src={imgSrc} alt={alt} className="w-11 h-11 rounded-full object-cover" />
    </button>
  );
};
