
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto bg-white p-2 rounded-full shadow-lg flex">
      <input 
        type="text" 
        placeholder="Поиск по городам, регионам или интересам" 
        className="flex-grow bg-transparent px-4 py-2 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button className="rounded-full bg-tourism-blue hover:bg-tourism-darkBlue">
        <Search className="mr-2" size={16} />
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
