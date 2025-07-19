import VectorIcon from '@/assets/icons/headernav/search.svg';

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = 'Find something sweet...' }: SearchBarProps) => {
  return (
    <div className="flex items-center bg-neutral-100 rounded-lg h-10 w-80 px-4">
      <img src={VectorIcon} alt="Buscar" className="w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-black placeholder:text-gray-500 font-medium text-base leading-none tracking-normal focus:text-pink-500"
      />
    </div>
  );
};
