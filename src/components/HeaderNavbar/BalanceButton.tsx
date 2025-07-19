import Solana from '@/assets/icons/headernav/solana.svg';
import { useState } from 'react';

interface BalanceButtonProps {
  balance: string;
}

export const BalanceButton = ({ balance }: BalanceButtonProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className={`flex items-center gap-2 bg-neutral-100 rounded-lg h-10 min-w-36 px-4 py-2 text-black font-medium text-base leading-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-md duration-300
        ${show ? 'scale-110 ring-4 ring-pink-300 bg-pink-50' : 'hover:scale-105 hover:bg-pink-50'}`}
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-pressed={show}
      >
        <img src={Solana} alt="Expandir" className="w-5 h-5 mr-2 animate-spin-slow" />
        <span className="flex-1 text-left text-pink-500">{balance} SOL</span>
      </button>
      {show && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in z-50 p-4 text-center">
          <span className="block text-pink-500 font-bold mb-2">¡Balance actualizado!</span>
          <span className="text-gray-500 text-sm">Pronto podrás ver tu historial de transacciones aquí 🍬</span>
        </div>
      )}
    </div>
  );
};
