import Solana from '@/assets/icons/headernav/solana.svg';

interface BalanceButtonProps {
  balance: string;
}

export const BalanceButton = ({ balance }: BalanceButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 bg-neutral-100 rounded-lg h-10 min-w-36 px-4 py-2 text-black font-medium text-base leading-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      type="button"
    >
      <img src={Solana} alt="Expandir" className="w-5 h-5 mr-2" />
      <span className="flex-1 text-left">{balance} SOL</span>
    </button>
  );
};
