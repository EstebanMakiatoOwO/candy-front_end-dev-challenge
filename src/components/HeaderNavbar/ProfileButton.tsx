import ProfileImg from '@/assets/icons/headernav/avatar-background.svg';
import { useState } from 'react';

interface ProfileButtonProps {
  imgSrc?: string;
  alt?: string;
}

export const ProfileButton = ({ imgSrc = ProfileImg, alt = 'Perfil de usuario' }: ProfileButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center justify-center w-11 h-11 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 transition shadow-md duration-300
          ${open ? 'ring-4 ring-pink-300 scale-110 rotate-6' : 'hover:scale-110 hover:ring-4 hover:ring-pink-200'}`}
        aria-label="Perfil"
        aria-pressed={open}
      >
        <img src={imgSrc} alt={alt} className="w-11 h-11 rounded-full object-cover transition-transform duration-300" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in z-50">
          <div className="p-4 text-center">
            <span className="block text-pink-500 font-bold mb-2">¡Hola, Candy Lover!</span>
            <span className="text-gray-500 text-sm">Pronto aquí podrás ver tu perfil y logros 🍬</span>
          </div>
        </div>
      )}
    </div>
  );
};
